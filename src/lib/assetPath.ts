const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path with the GitHub Pages basePath when deployed. */
export function assetPath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
