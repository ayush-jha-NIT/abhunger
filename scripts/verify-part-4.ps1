# Run in the project root: C:\abhunger
$ErrorActionPreference = "Stop"
$files = @(
  "src\app\page.tsx",
  "src\app\home.css",
  "src\config\home-content.ts",
  "public\images\food\fresh-ingredients.webp",
  "public\images\food\fast-service.webp",
  "tests\home-page.test.mjs",
  "docs\phase-4-home-page.md"
)
foreach ($file in $files) {
  if (-not (Test-Path -LiteralPath $file)) { throw "Part 4 missing: $file" }
  Write-Host "OK  $file" -ForegroundColor Green
}
node scripts/validate-assets.mjs
if ($LASTEXITCODE -ne 0) { throw "Asset validation failed" }
Write-Host "Part 4 files and asset manifest present. Run npm test, npm run lint, npm run typecheck and npm run build." -ForegroundColor Cyan
