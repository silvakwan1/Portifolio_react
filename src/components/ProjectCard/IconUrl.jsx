import githubLogo from "/src/assets/github-logo.svg";
import iconLInk from "/src/assets/link-icon.svg";

export default function IconUrl({ urlCode, urlPreview }) {
  return (
    <div className="px-4 flex justify-center gap-5 pb-5 underline text-linearGren">
      {urlCode && urlPreview ? (
        <>
          <a
            target="_blank"
            rel="noreferrer"
            className="flex  gap-2 miniphon:gap-1 items-center whitespace-nowrap"
            href={urlPreview}
          >
            <img
              className="w-6 h-6 miniphon:w-4 miniphon:h-4"
              src={iconLInk}
              alt="Icon de link"
            />
            Live Preview
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="flex  gap-2 miniphon:gap-1 items-center whitespace-nowrap "
            href={urlCode}
          >
            <img
              className="w-6 h-6 miniphon:w-4 miniphon:h-4"
              src={githubLogo}
              alt="logo git hub"
            />
            View Code
          </a>
        </>
      ) : urlCode ? (
        <>
          <a
            target="_blank"
            rel="noreferrer"
            className="flex  gap-2 miniphon:gap-1 items-center whitespace-nowrap "
            href={urlCode}
          >
            <img
              className="w-6 h-6 miniphon:w-4 miniphon:h-4"
              src={githubLogo}
              alt="logo git hub"
            />
            View Code
          </a>
        </>
      ) : urlPreview ? (
        <>
          <a
            target="_blank"
            rel="noreferrer"
            className="flex  gap-2 miniphon:gap-1 items-center whitespace-nowrap"
            href={urlPreview}
          >
            <img
              className="w-6 h-6 miniphon:w-4 miniphon:h-4"
              src={iconLInk}
              alt="Icon de link"
            />
            Live Preview
          </a>
        </>
      ) : null}
    </div>
  );
}
