if (git diff --cached --name-only | Select-String "^\.env$") {
    Write-Host "Error: .env file cannot be committed" -ForegroundColor Red
    exit 1
}
