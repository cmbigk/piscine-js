#!/bin/bash

# Fetch the latest changes from the origin before starting
echo -e "\033[36mPulling the latest changes from the origin main branch.\033[0m" 
git pull origin main
if [ $? -ne 0 ]; then
    echo -e "\033[31mError: Failed to pull the latest changes.\033[0m"
    exit 1
fi

# Stage and commit the changes before switching branches
echo -e "\033[36mCommitting the changes before changing the branch.\033[0m" 
git add .
git commit -m "Committing changes before changing branch"
git push origin main
if [ $? -ne 0 ]; then
    echo -e "\033[31mError: Failed to commit or push changes.\033[0m"
    exit 1
fi

# Switch to the master branch
echo -e "\033[36mEntering the master branch\033[0m" 
git checkout master
if [ $? -ne 0 ]; then
    echo -e "\033[31mError: Failed to switch to the master branch.\033[0m"
    exit 1
fi

# Check the git status
echo -e "\033[36mGit Status\033[0m" 
git status

# Pull the latest changes from the master branch
echo -e "\033[36mPulling the latest history from master branch.\033[0m" 
git pull
if [ $? -ne 0 ]; then
    echo -e "\033[31mError: Failed to pull the latest changes from master.\033[0m"
    exit 1
fi

# Switch back to the main branch
echo -e "\033[36mEntering the main branch\033[0m" 
git checkout main
if [ $? -ne 0 ]; then
    echo -e "\033[31mError: Failed to switch to the main branch.\033[0m"
    exit 1
fi

git branch

# Merge the changes from master into main
echo -e "\033[36mMerging the branches\033[0m" 
git merge master --allow-unrelated-histories
if [ $? -ne 0 ]; then
    echo -e "\033[31mError: Merge failed. Please resolve any conflicts.\033[0m"
    exit 1
fi

# Commit the merge changes
echo -e "\033[36mCommitting the merged changes\033[0m" 
git add .
git commit -m "Merged the files with the master branch"
git push origin main
if [ $? -ne 0 ]; then
    echo -e "\033[31mError: Failed to commit or push the merged changes.\033[0m"
    exit 1
fi

echo -e "\033[32m✅ Successfully merged and pushed the changes.\033[0m"