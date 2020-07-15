@echo off

for %%f in (*.scss) do (
    sass %~dp0%%~nf.scss %~dp0%%~nf.css --style=compressed --no-source-map
)

pause