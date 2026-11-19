import crypto from "node:crypto";

export const ADMIN_COOKIE_NAME = "admin_token";
const TOKEN_TTL_SECONDS = 60 * 60 * 24; // 24 hours

export interface AdminJwtPayload {
  sub: string;
  role: "admin";
  iat: number;
  exp: number;
}

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET?.trim();
  if (!secret) {
    return "black-banana-tech-silva-software-jwt-secret-2026";
  }
  return secret;
}

function base64UrlEncode(input: string | Buffer): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function base64UrlDecodeToString(input: string): string {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const padLength = (4 - (normalized.length % 4)) % 4;
  const padded = normalized + "=".repeat(padLength);
  return Buffer.from(padded, "base64").toString("utf8");
}

export function signAdminJwt(subject: string, ttlSeconds = TOKEN_TTL_SECONDS): string {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "HS256", typ: "JWT" };
  const payload: AdminJwtPayload = {
    sub: subject,
    role: "admin",
    iat: now,
    exp: now + ttlSeconds,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${encodedHeader}.${encodedPayload}`;

  const signature = crypto
    .createHmac("sha256", getJwtSecret())
    .update(signingInput)
    .digest();

  const encodedSignature = base64UrlEncode(signature);
  return `${signingInput}.${encodedSignature}`;
}

export function verifyAdminJwt(token: string | undefined | null): AdminJwtPayload | null {
  if (!token || typeof token !== "string") {
    return null;
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return null;
  }

  const [encodedHeader, encodedPayload, encodedSignature] = parts;
  if (!encodedHeader || !encodedPayload || !encodedSignature) {
    return null;
  }

  try {
    const headerJson = JSON.parse(base64UrlDecodeToString(encodedHeader)) as {
      alg?: string;
      typ?: string;
    };
    if (headerJson.alg !== "HS256" || headerJson.typ !== "JWT") {
      return null;
    }

    const signingInput = `${encodedHeader}.${encodedPayload}`;
    const expectedSignature = base64UrlEncode(
      crypto.createHmac("sha256", getJwtSecret()).update(signingInput).digest()
    );

    const actualBuf = Buffer.from(encodedSignature, "utf8");
    const expectedBuf = Buffer.from(expectedSignature, "utf8");

    if (
      actualBuf.length !== expectedBuf.length ||
      !crypto.timingSafeEqual(actualBuf, expectedBuf)
    ) {
      return null;
    }

    const payload = JSON.parse(
      base64UrlDecodeToString(encodedPayload)
    ) as Partial<AdminJwtPayload>;

    if (
      typeof payload.sub !== "string" ||
      payload.role !== "admin" ||
      typeof payload.exp !== "number" ||
      typeof payload.iat !== "number"
    ) {
      return null;
    }

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp <= now) {
      return null;
    }

    return payload as AdminJwtPayload;
  } catch {
    return null;
  }
}

export function verifyAdminCredentials(identifier: string, password: string): {
  valid: boolean;
  subject: string;
} {
  const configuredUser = (process.env.ADMIN_USERNAME || "admin").trim();
  const configuredEmail = (process.env.ADMIN_EMAIL || "silvakwan7@gmail.com").trim();
  const configuredPassword = process.env.ADMIN_PASSWORD || "admin123";

  const trimmedId = identifier.trim();
  const userMatches =
    trimmedId.toLowerCase() === configuredUser.toLowerCase() ||
    trimmedId.toLowerCase() === configuredEmail.toLowerCase();

  if (!userMatches || !password) {
    return { valid: false, subject: "" };
  }

  const passBuf = Buffer.from(password, "utf8");
  const expectedBuf = Buffer.from(configuredPassword, "utf8");

  if (passBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(passBuf, expectedBuf)) {
    return { valid: false, subject: "" };
  }

  return { valid: true, subject: trimmedId };
}
