

@REM call npm "run" "build"
@REM cd "dist"
@REM echo cbmckeown.com > CNAME
@REM git "init"
@REM git "checkout" "-b" "gh-pages"
@REM git "add" "-A"
@REM git "commit" "-m" "deploy"
@REM git "push" "-u" "git@github.com:connormckeown/react-website.git" "gh-pages"
@REM cd ".."


call npm "run" "build"
git "add" "dist" "-f"
git "commit" "-m" "deploy - adding new dist"
git "subtree" "push" "--prefix" "dist" "origin" "gh-pages"