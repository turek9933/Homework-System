#!/bin/bash

if [ ! -d "node_modules" ]; then
  echo "Instalacja paczek"
  npm install
fi

echo "Uruchamianie aplikacji"
npm start