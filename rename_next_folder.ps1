# PowerShell Script

# Must be the same as in remove-inline-scripts.js
$NEXT_FOLDER = "next"

# Remove the existing folder if it exists
$NEXT_PATH = "./out/$NEXT_FOLDER"
if (Test-Path $NEXT_PATH) {
    Remove-Item -Recurse -Force $NEXT_PATH
    Write-Output "Removed existing folder: $NEXT_FOLDER"
}

# Rename the _next folder to next-assets
$OLD_FOLDER = "./out/_next"
if (Test-Path $OLD_FOLDER) {
    Rename-Item -Path $OLD_FOLDER -NewName $NEXT_FOLDER
    Write-Output "Renamed _next folder to $NEXT_FOLDER"
} else {
    Write-Output "_next folder not found."
    exit 1
}

# Replace occurrences of _next with your desired folder name
Get-ChildItem -Path ./out -Recurse -Filter *.html | ForEach-Object {
    (Get-Content $_.FullName) -replace '/_next/', "/$NEXT_FOLDER/" | Set-Content $_.FullName
    Write-Output "Updated: $($_.FullName)"
}

# Print success message
Write-Output "Successfully renamed _next folder"
