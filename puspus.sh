#!/bin/bash

# Fetch the latest changes from Gitea
echo -e "\033[36mGit Pulling origin master\033[0m" 
git pull origin master  # Change 'master' if your Gitea branch is different

# Push the changes to GitHub
echo -e "\033[36mGit pushing the files to github\033[0m" 
git push github master  # Change 'master' if using a different branch

echo -e "\033[32m✅ Successfully pushed Gitea changes to GitHub!\033[0m"