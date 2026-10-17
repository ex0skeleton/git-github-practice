# Lesson order

1. Verify Git in VS Code; understand local files, Git, and GitHub.
2. Set/check author name and email; open the project folder.
3. Initialize a repository; learn main, root, .git, and git status.
4. Learn working folder, staging, and commits with add, diff, commit, and log.
5. Create an empty GitHub repository; connect origin; authenticate; push.
6. Edit locally; inspect, commit, and push; observe GitHub history.
7. Edit on GitHub; understand fetch and pull; clone into another folder.
8. Create a branch, switch branches, push it, open a pull request, and merge.
9. Resolve one intentional conflict; safely undo a practice change.
10. Understand forks, remotes, and upstream using a concrete example.
11. Add a small GitHub Actions workflow; optionally publish with GitHub Pages.

## Our rule for every command

- What does it mean?
- What changes locally or on GitHub?
- What output should you expect?
- What happens if you skip it?

## First vocabulary

Git: software that records project history on your computer.
GitHub: a service that hosts Git repositories and collaboration tools.
Repository (repo): a project tracked by Git, including its history.
Commit: a recorded snapshot with a message and author information.
Branch: a named reference to a line of commits; useful for separate work.
main: a conventional name for the primary branch, not a special folder.
Root: the project's top-level folder; not a branch name.
Remote: a named connection to another repository, often on GitHub.
origin: the conventional name for your main remote connection.
Push: send local commits to a remote repository.
Clone: create a local copy of a repository, including history.
Pull request: a GitHub proposal to review and merge branch changes.
Fork: a separate GitHub repository associated with an original project.
GitHub Actions: automated workflows triggered by events such as pushes.

A local commit does not automatically appear on GitHub. A push sends it there.
A push does not automatically publish a live website; hosting is a separate step.
