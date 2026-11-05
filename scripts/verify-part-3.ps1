# Run from C:\abhunger after applying Part 3.
$ErrorActionPreference = "Stop"
$expected = @(
  "src\config\header.ts",
  "src\lib\cart-storage.ts",
  "src\components\layout\site-header.tsx",
  "src\components\layout\site-footer.tsx",
  "src\components\layout\cart-indicator.tsx",
  "src\components\ui\info-strip.tsx",
  "src\components\ui\photo-tile.tsx",
  "public\images\branding\ab-hunger-mark-light.svg",
  "docs\phase-3-shared-layout.md"
)

foreach ($file in $expected) {
  if (-not (Test-Path -LiteralPath $file)) { throw "Part 3 incomplete: missing $file" }
  Write-Host "OK  $file" -ForegroundColor Green
}
Write-Host "Part 3 files are installed. Run npm test, npm run lint, npm run typecheck and npm run build for full validation." -ForegroundColor Cyan
