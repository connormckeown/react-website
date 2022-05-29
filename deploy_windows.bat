@REM Below builds the site and pushes the contents of the dist folder to a new remote branch 'gh-pages'.
@REM This means that the remote branch 'gh-pages' will have to be deleted before you can run this script.

call npm "run" "build"
@REM cd "dist"
@REM echo "cbmckeown.com" ">" "CNAME"
@REM cd ".."
git "add" "dist" "-f"
git "commit" "-m" "deploy - adding new dist"
git "subtree" "push" "--prefix" "dist" "origin" "gh-pages"