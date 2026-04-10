param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$PrismaArgs
)

$env:HTTP_PROXY = $null
$env:HTTPS_PROXY = $null
$env:ALL_PROXY = $null
$env:PRISMA_SCHEMA_ENGINE_BINARY = Join-Path $PSScriptRoot "../node_modules/@prisma/engines/schema-engine-windows.exe"

& npx prisma @PrismaArgs
exit $LASTEXITCODE
