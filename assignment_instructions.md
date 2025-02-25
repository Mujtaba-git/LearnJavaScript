**Assignment instructions file:**

# Git Workflow Instructions for Assignments

Follow these guidelines to properly organize and submit your assignments:

1. **Folder Structure**
   - Create a dedicated folder for each assignment under the corresponding weekday directory.
   - **Example Structure**:
     ```
     your-repo/
     └── week1_day2/
         └── assignments/
             ├── problem1.js
             └── problem2.js
     ```

2. **File Naming Convention**
   - Name your solution files as `problem1.js`, `problem2.js`, etc., based on the problem number.
   - Ensure the file extension is correct (e.g., `.js` for JavaScript files).
   - Place these files in the appropriate `assignments/` folder.

3. **Problem Documentation**
   - Comment the problem statement at the top of your solution file using a block comment (`/* ... */`).
   - **Example** (`problem1.js`):
     ```javascript
     /*
     Problem 1: Write a function that takes two numbers and returns their sum.
     */
     ```

4. **Write Your Solution**
   - Write your solution code after the problem comment block in the same file.

5. **Commit Changes**
   - Commit your changes with a descriptive message that includes the assignment and problem details.
   - **Example**:
     ```bash
     git commit -m "Added solution for problem1 in week1_day2 assignment"
     ```

6. **Push to GitHub**
   - Push your changes to the remote repository.
   - **Example**:
     ```bash
     git push origin main
     ```