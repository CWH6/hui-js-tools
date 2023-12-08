@echo off
SETLOCAL EnableDelayedExpansion

REM 询问是否提交到 Git 仓库
echo Do you want to commit to Git repository? (y/n)
set /p gitCommit=

if /i "%gitCommit%"=="y" (
    git add .
    echo Enter commit message:
    rem 清除可能存在的换行符和空格
    set commitMessage=
    set /p commitMessage=

    rem 检查 commitMessage 是否为空
    if not "!commitMessage!"=="" (
        git commit -m "!commitMessage!"
        git push
    ) else (
        echo Commit message cannot be empty
    )
) else (
    echo Skipping commit to Git repository
)

REM 询问是否发布到 npm registry
echo Do you want to publish to npm registry? (y/n)
set /p npmPublish=

if /i "%npmPublish%"=="y" (
    npm version patch
    npm publish
) else (
    echo Skipping publish to npm registry
)

REM 显示完成情况并询问是否关闭
echo Operations completed
echo Do you want to close the window? (y/n)
set /p close=

if /i "%close%"=="y" (
    exit
) else (
    pause
)
