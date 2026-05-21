const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Git Auto-Commit Watcher...');
console.log('Watching for file changes in:', process.cwd());
console.log('To stop the watcher, press Ctrl + C\n');

let commitTimeout = null;
const DEBOUNCE_DELAY = 5000; // 5 seconds delay to group rapid saves
let changedFiles = new Set();

// Files and directories to ignore
const IGNORE_PATTERNS = [
  /\.git/,
  /node_modules/,
  /autocommit\.js/,
  /\.vscode/,
  /\.DS_Store/
];

function shouldIgnore(filePath) {
  return IGNORE_PATTERNS.some(pattern => pattern.test(filePath));
}

function runGitAutoCommit() {
  try {
    // Check if there are actual changes staged or unstaged
    const status = execSync('git status --porcelain').toString().trim();
    if (!status) {
      return; // No changes to commit
    }

    console.log('\n📁 Detected changes in:');
    changedFiles.forEach(file => console.log(`  - ${file}`));

    console.log('⚡ Running git add . ...');
    execSync('git add .');

    // Create a meaningful commit message list
    const fileList = Array.from(changedFiles).join(', ');
    const commitMessage = `Auto-commit: saved changes to ${fileList}`;

    console.log(`💾 Committing: "${commitMessage}"`);
    execSync(`git commit -m "${commitMessage}"`);
    console.log('✅ Changes successfully committed!');

    // Push automatically if remote is configured
    try {
      console.log('📤 Pushing automatically to remote...');
      execSync('git push', { stdio: 'inherit' });
      console.log('✅ Successfully pushed to GitHub!');
    } catch (pushError) {
      console.log('⚠️ Auto-push skipped or failed. (Make sure your credentials are saved)');
    }

  } catch (error) {
    console.error('❌ Git operation failed:', error.message);
  } finally {
    // Reset state for next changes
    changedFiles.clear();
    commitTimeout = null;
  }
}

// Watch the directory recursively (supported on Windows)
fs.watch(process.cwd(), { recursive: true }, (eventType, filename) => {
  if (!filename || shouldIgnore(filename)) {
    return;
  }

  // Record changed file relative path
  changedFiles.add(filename);

  // Clear existing timeout to debounce
  if (commitTimeout) {
    clearTimeout(commitTimeout);
  }

  // Set timeout to commit after inactivity
  commitTimeout = setTimeout(runGitAutoCommit, DEBOUNCE_DELAY);
});
