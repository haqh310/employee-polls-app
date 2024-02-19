# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── index.css # Global styles. You probably won't need to change anything here.
    │── index.js # You should not need to modify this file. It is used for DOM rendering only.
    │── actions 
    │   │── authedUser.js # Take all events and functions when login.
    │   │── quesions.js # Take all events and functions of questions.
    │   │── shared.js # Function return initial data.
    │   └── users.js # Take all events and functions of users.
    ├── components
    │    │── Error404.js # Screen error 404
    │    │── Home.js # Screen home, show list questions.
    │    │── Leaderboard.js # Screen leaderboard, table list users, questions and sum polls.
    │    │── Login.js # Screen login, required login when goto another screen.
    │    │── Login.test.js # Used for testing. Provided with Create React Login. Testing is encouraged, but not required.
    │    │── Nav.js # Global component. Use for show nav for all screen.
    │    │── NewQuestion.js # Screen add new question.
    │    │── NewQuestion.test.js # Used for testing. Provided with Create React NewQuestion. Testing is encouraged, but not required.
    │    │── Poll.js # Screen show detail question. Show detail information polls.
    │    │── Private.js # Component use for some screen. Check logined for goto another screen.
    │    └── QuestionCard.js # Component show detail of question. Includes content two options, author, date creates of question.
    ├── images
    │    │── employee.jpg # Image employee, use in screen login. 
    │    │── leaf.jpg # Avatar of employee johndoe
    │    │── snow.jpg # Avatar of employee sarahedo
    │    └── tyler.jpg # Avatar of employee tylermcginnis
    ├── reducers
    │     │── authedUser.js # Redux save data when login or logout.
    │     │── index.js # Combine reducers of 3 redux.
    │     │── questions.js # Redux save data of questions when have action.
    │     └── users.js # Redux save data of users when have action.
    └── utils
        │── _DATA_.js # Data of users, questions and function.
        │── api.js # Function api for _DATA.
        │── helpers.js # Format form int to Date .
        └── image.js # Choose correct image for user.
```