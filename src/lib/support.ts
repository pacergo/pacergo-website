/**
 * Customer-support inbox. Mirrors `@pacergo/shared` (packages/shared) — the
 * website is a standalone repo, so it can't resolve the monorepo workspace;
 * keep this in sync with the app if the address ever changes.
 */
export const SUPPORT_EMAIL = "pacergov1@gmail.com";

/** `mailto:` link with a default subject, for the support CTA. */
export function supportMailto(subject = "Pacergo 客服"): string {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
