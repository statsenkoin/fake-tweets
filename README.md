# FakeTweets - personal test SPA project

##### (GoIT FSON64)

### [FakeTweets](https://statsenkoin.github.io/fake-tweets/)- small SPA (single page application) project. It presents a simple connection to the [mocapi.io](https://mockapi.io/projects) server to display a list of "fake tweets" users, perform some simple operations, and navigate the page.

## Features

- show a complete list of specially designed personal cards of users of "fake
  tweets";
- change the number of tweets and read/write them from/to the server;
- filter the list of users by parameters all/follow/follow;
- navigation between pages;
- implement server-based pagination to limit user downloads;

## Usage

This project was build with Create React App and uses HTML, CSS, JavaScript,
React, AJAX, HTTP Requests, Git/Github, npm and packages.

### How to run project locally

For familiarization and setting additional features refer to the
[Create React App documentation](https://create-react-app.dev/). LTS version of
Node.js is required. [Download and install](https://nodejs.org/en/) if needed.

1. Clone this repository or create a new repository using this one as a
   template;
2. In your GitHub repository check workflow permissions
   (->Settings->Actions->General->Workflow permissions->choose 'Read and write
   permissions' and 'Allow GitHub Actions to create and approve pull
   requests'->Save).
3. Download to your local PC (Open with GitHub Desktop). In package.json rename
   `homepage":"https://{YOUR_GITHUB_ACCOUNT}.github.io/{YOUR_APP}/`.
4. To add dependencies in the project directory, open console (bash is highly
   recommended) and run:

   ```
   npm i  //or
   npm install
   ```

5. Start server in dev mode

   ```
   npm start
   ```

   run `http://localhost:XXXX` to view in your browser; The page reloads
   automatically showing your changes and any errors in the console.

6. Make initial commit. In your GitHub repository setup Pages to access your
   homepage (Settings->Pages->Brunch->gh-pages->save)

## License

This is an open-source project. No any requests or links needed
