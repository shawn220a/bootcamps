# Unit 09 Node.js and ES6+ Homework: Good README Generator

Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

```sh
node index.js
```

The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their profile image. They will then be prompted with questions about their project.

Here are the following questions you will ask the user:
1) What is your GitHub username? <user_will_provide_github_username>
2) What is your project's name?
3) Please write a short description of your project?
4) What kind of license should your project have? User can choose from list of items
5) What command should be run to install dependencies? (default to "npm i" if user doesn't respond)
6) What command should be run to run tests? (default to "npm test" if user doesn't respond)
7) What does the user need to know about using the repo?
8) What does the user need to know about contributing to the repo?

The README will be populated with the following:

* At least one badge license
  [Refer to this URL for badge images](https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500)
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
    * [Use github user api to retrieve profile picture](https://api.github.com/users/calvincarter)
    * https://api.github.com/users/<username_goes_here>

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

Refer to the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md).

## Business Context

When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The generated README includes a bio image from the user's GitHub profile.

* The generated README includes the following sections: 
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.

```
GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
```
- - -

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your code base in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have more than 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* An animated GIF demonstrating the app functionality

* A generated PDF of your GitHub profile

* The URL of the GitHub repository

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
