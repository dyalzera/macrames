@echo off
title Macrames_Local_Server
echo ===================================================
echo Iniciando o Servidor Local do Macrames...
echo ===================================================
echo.
echo Quando o servidor iniciar, voce podera acessar o site em:
echo http://localhost:8080
echo.
echo Para fechar o servidor, pressione CTRL+C ou feche esta janela.
echo.
cmd.exe /c "npx http-server -p 8080"
pause
