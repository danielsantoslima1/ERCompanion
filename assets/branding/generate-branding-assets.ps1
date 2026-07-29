param(
  [string]$EdgePath = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)

$ErrorActionPreference = 'Stop'
$brandingDirectory = $PSScriptRoot
$temporaryProfile = Join-Path $env:TEMP 'ercompanion-branding-edge'
$resolvedTemporaryProfile = [System.IO.Path]::GetFullPath($temporaryProfile)
$resolvedTempRoot = [System.IO.Path]::GetFullPath($env:TEMP)

if (-not $resolvedTemporaryProfile.StartsWith($resolvedTempRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw 'The temporary Edge profile must remain inside the system temporary directory.'
}

if (-not (Test-Path -LiteralPath $EdgePath)) {
  throw "Microsoft Edge was not found at the configured path: $EdgePath"
}

function Remove-BrandingTemporaryProfile {
  for ($attempt = 0; $attempt -lt 10; $attempt += 1) {
    if (-not (Test-Path -LiteralPath $resolvedTemporaryProfile)) {
      return
    }
    try {
      Remove-Item -LiteralPath $resolvedTemporaryProfile -Recurse -Force
      return
    }
    catch {
      if ($attempt -eq 9) { throw }
      Start-Sleep -Milliseconds 200
    }
  }
}

Remove-BrandingTemporaryProfile
New-Item -ItemType Directory -Path $resolvedTemporaryProfile | Out-Null

function Export-TransparentPng {
  param(
    [string]$Source,
    [string]$Destination,
    [int]$Width,
    [int]$Height
  )

  $sourceUri = ([System.Uri]::new((Resolve-Path -LiteralPath $Source))).AbsoluteUri
  $profilePath = Join-Path $resolvedTemporaryProfile ([System.IO.Path]::GetFileNameWithoutExtension($Destination))
  New-Item -ItemType Directory -Path $profilePath | Out-Null
  if (Test-Path -LiteralPath $Destination) {
    Remove-Item -LiteralPath $Destination -Force
  }
  & $EdgePath `
    '--headless=new' `
    '--disable-gpu' `
    '--hide-scrollbars' `
    '--allow-file-access-from-files' `
    '--default-background-color=00000000' `
    "--user-data-dir=$profilePath" `
    "--window-size=$Width,$Height" `
    "--screenshot=$Destination" `
    $sourceUri

  for ($attempt = 0; $attempt -lt 25 -and -not (Test-Path -LiteralPath $Destination); $attempt += 1) {
    Start-Sleep -Milliseconds 200
  }
  if (-not (Test-Path -LiteralPath $Destination)) {
    throw "Failed to rasterize $Source"
  }
}

try {
  Export-TransparentPng `
    -Source (Join-Path $brandingDirectory 'elden-ring-companion-emblem.svg') `
    -Destination (Join-Path $brandingDirectory 'elden-ring-companion-emblem.png') `
    -Width 512 `
    -Height 640
  Export-TransparentPng `
    -Source (Join-Path $brandingDirectory 'elden-ring-companion-splash.svg') `
    -Destination (Join-Path $brandingDirectory 'elden-ring-companion-splash.png') `
    -Width 900 `
    -Height 1200
}
finally {
  Remove-BrandingTemporaryProfile
}

# Edge may report a non-zero native exit code after completing a headless
# screenshot successfully. The existence checks above are the source of truth.
$global:LASTEXITCODE = 0
