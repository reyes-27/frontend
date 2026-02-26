
Write-Host "Building and starting Docker containers..." -ForegroundColor Cyan

# Build and run with docker compose
docker compose up --build

Write-Host "`n----------------------------------------" -ForegroundColor Green
Write-Host "   🚀 Containers started successfully!" -ForegroundColor Green
Write-Host "   😊 Happy coding!" -ForegroundColor Yellow
Write-Host "----------------------------------------`n"

# docker exec -it okw_backend python manage.py shell