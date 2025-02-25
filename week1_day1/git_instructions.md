Setting up Git & Clone a repo:

### Windows:
1. **Install Git:**
   - Download the Git installer from the official website: [Git for Windows](https://git-scm.com/download/win).
   - Run the installer and follow the instructions. You can leave the default options unless you have specific preferences.

2. **Verify Installation:**
   - Open the Command Prompt (`cmd`) or PowerShell and type:
     ```
     git --version
     ```
   - This should return the installed Git version.

3. **Clone a Repository:**
   - Open the Command Prompt or PowerShell.
   - Use the `git clone` command followed by the repository URL:
     ```
     git clone https://github.com/username/repository.git
     ```
   - Replace the URL with the actual repository URL.

---

### macOS:
1. **Install Git:**
   - You can install Git via Homebrew (if Homebrew is installed) or directly from the command line.
   
   **Using Homebrew:**
   - Open the Terminal and run:
     ```
     brew install git
     ```

   **Without Homebrew:**
   - Open the Terminal and run:
     ```
     git --version
     ```
   - macOS may prompt you to install Git if it's not already installed.

2. **Verify Installation:**
   - After installation, verify Git by typing:
     ```
     git --version
     ```

3. **Clone a Repository:**
   - Open the Terminal.
   - Use the `git clone` command followed by the repository URL:
     ```
     git clone https://github.com/username/repository.git
     ```
   - Replace the URL with the actual repository URL.


Commands to push your changes to a remote repository using Git:

1. **Navigate to your repository folder:**
   Open your terminal or command prompt and go to the folder of your local repository:
   ```
   cd path/to/your/repository
   ```

2. **Check the status of changes:**
   To see which files have been modified or added, use:
   ```
   git status
   ```

3. **Add your changes to staging:**
   If you want to add all modified files, use:
   ```
   git add .
   ```
   Or, to add specific files, use:
   ```
   git add <filename>
   ```

4. **Commit your changes:**
   After staging the files, commit the changes with a message describing what you did:
   ```
   git commit -m "Your commit message"
   ```

5. **Push your changes to the remote repository:**
   Push the changes to the remote repository. This is typically done to the `main` or `master` branch (but could be any branch you're working on):
   ```
   git push origin main
   ```
   Replace `main` with your branch name if it's different.


Git commands to fetch new changes from the remote repository and update your local repository:

1. **Navigate to your repository folder:**
   Open your terminal or command prompt and go to the folder of your local repository:
   ```
   cd path/to/your/repository
   ```

2. **Fetch new changes from the remote repository:**
   To fetch the latest changes from the remote repository (without merging them into your local branch), use:
   ```
   git fetch
   ```

3. **Merge the fetched changes into your local branch:**
   After fetching the changes, you can merge them into your local branch using:
   ```
   git merge origin/main
   ```
   Replace `main` with the branch name you're working on, if different.

4. **Pull changes (fetch and merge in one step):**
   Alternatively, you can fetch and automatically merge the changes in one step using:
   ```
   git pull origin main
   ```
   Again, replace `main` with the appropriate branch name.

These commands will help you keep your local repository up-to-date with the changes made on the remote repository.