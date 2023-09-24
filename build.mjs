Bun.build({
  entrypoints: ["./src/extension.ts"],
  outdir: "dist",
  minify: false,
  external: ["vscode"],
  platform: "node",
});
