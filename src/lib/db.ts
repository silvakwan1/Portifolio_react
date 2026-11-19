import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

export interface ContactSubmissionRecord {
  id: number;
  name: string;
  email: string;
  phone: string;
  project_type: string;
  message: string;
  created_at: string;
}

export interface NewContactSubmissionInput {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface SqliteStatement {
  run: (...params: unknown[]) => { lastInsertRowid: number | bigint; changes: number | bigint };
  get: (...params: unknown[]) => unknown;
  all: (...params: unknown[]) => unknown[];
}

interface SqliteDatabase {
  exec: (sql: string) => void;
  prepare: (sql: string) => SqliteStatement;
}

const runtimeRequire = createRequire(import.meta.url);

let dbInstance: SqliteDatabase | null = null;
let activeDbPath: string | null = null;

export function getResolvedDbPath(): string {
  const configured =
    process.env.SQLITE_DB_PATH?.trim() ||
    process.env.DATABASE_URL?.replace(/^file:/i, "").trim() ||
    (process.env.VERCEL ? "/tmp/portfolio.sqlite" : "./data/portfolio.sqlite");

  return path.isAbsolute(configured)
    ? configured
    : path.resolve(process.cwd(), configured);
}

function getDb(): SqliteDatabase {
  let targetPath = getResolvedDbPath();

  if (dbInstance && activeDbPath === targetPath) {
    return dbInstance;
  }

  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
    } catch {
      targetPath = "/tmp/portfolio.sqlite";
    }
  }

  const sqliteModule = runtimeRequire("node:sqlite") as {
    DatabaseSync: new (filename: string) => SqliteDatabase;
  };

  const db = new sqliteModule.DatabaseSync(targetPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL DEFAULT '',
      project_type TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  const columns = db.prepare("PRAGMA table_info(contact_submissions)").all() as Array<{
    name?: string;
  }>;
  const hasPhoneColumn = columns.some((col) => col.name === "phone");
  if (!hasPhoneColumn) {
    db.exec(`ALTER TABLE contact_submissions ADD COLUMN phone TEXT NOT NULL DEFAULT '';`);
  }

  dbInstance = db;
  activeDbPath = targetPath;
  return db;
}

function toPlainRecord(raw: Record<string, unknown>): ContactSubmissionRecord {
  return {
    id: Number(raw.id),
    name: String(raw.name ?? ""),
    email: String(raw.email ?? ""),
    phone: String(raw.phone ?? ""),
    project_type: String(raw.project_type ?? ""),
    message: String(raw.message ?? ""),
    created_at: String(raw.created_at ?? ""),
  };
}

export function insertContactSubmission(
  input: NewContactSubmissionInput
): ContactSubmissionRecord {
  const db = getDb();
  const createdAt = new Date().toISOString();

  const insertStmt = db.prepare(`
    INSERT INTO contact_submissions (name, email, phone, project_type, message, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const result = insertStmt.run(
    input.name.trim(),
    input.email.trim(),
    input.phone.trim(),
    input.projectType.trim(),
    input.message.trim(),
    createdAt
  );

  const insertedId = Number(result.lastInsertRowid);

  const selectStmt = db.prepare(`
    SELECT id, name, email, phone, project_type, message, created_at
    FROM contact_submissions
    WHERE id = ?
  `);

  const row = selectStmt.get(insertedId) as Record<string, unknown> | undefined;

  return row
    ? toPlainRecord(row)
    : {
        id: insertedId,
        name: input.name.trim(),
        email: input.email.trim(),
        phone: input.phone.trim(),
        project_type: input.projectType.trim(),
        message: input.message.trim(),
        created_at: createdAt,
      };
}

export function listContactSubmissions(): ContactSubmissionRecord[] {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, name, email, phone, project_type, message, created_at
    FROM contact_submissions
    ORDER BY id DESC
  `);

  const rows = stmt.all() as Record<string, unknown>[];
  return rows.map(toPlainRecord);
}
