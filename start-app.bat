@echo off
IF NOT EXIST "node_modules" (
    echo Instalacja paczek
    npm install
)

echo Uruchamianie aplikacji
npm start