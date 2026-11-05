# Run from the project root: C:\abhunger
$ErrorActionPreference = "Stop"
$required = @(
  "src\app\about\page.tsx",
  "src\app\about\about.css",
  "docs\phase-5-about-page.md",
  "tests\about-page.test.mjs",
  "public\images\food\about-strip-burger.webp",
  "public\images\food\about-strip-pasta.webp",
  "public\images\food\about-strip-cappuccino.webp",
  "public\images\food\about-strip-sandwich.webp",
  "public\images\food\about-strip-brownie.webp"
)
foreach ($path in $required) {
  if (-not (Test-Path -LiteralPath $path)) { throw "Missing Part 5 file: $path" }
  Write-Host "OK: $path" -ForegroundColor Green
}
node scripts/validate-assets.mjs
if ($LASTEXITCODE -ne 0) { throw "Image assets validation failed" }
node --test tests/about-page.test.mjs
if ($LASTEXITCODE -ne 0) { throw "About page tests failed" }
Write-Host "Part 5 files and tests verified. Also run npm run lint, npm run typecheck, npm run build." -ForegroundColor Cyan
