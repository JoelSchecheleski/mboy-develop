@echo off
echo  Bem vindo ao Mboy

cd C:\projeto 
echo ng serve --port 7777 -o

echo pause 
start /min cmd /c "cd C:\projeto && code . && ng serve --port 7777 --open"
echo start /min cmd /c "cd C:\projeto && code . && npm run dev"

echo pause
