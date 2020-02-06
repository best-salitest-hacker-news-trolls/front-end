# 👹 🧂 Saltiest Hacker News Trolls 🧂 👹 (Front End Code Base)

## Table of Contents

- **[React Developer 1](#junior-react-developers)**<br>
- **[React Developer 2](#senior-react-developer)**<br>
- **[Product Vision Document](#Product-Vision-Document)**<br>
- **[Proposal](#proposal)**<br>
- **[UX Design](#ux-design)**<br>
- **[Frameworks and Libraries Used](#frameworks-and-libraries)**<br>
- **[Target Audience](#target-audience)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview

This frontend code base allows users to navigate and interact with the API created by the Data Science team, which evaluates the "saltiness" of users and individual comments on the Hacker News forum.

## Junior React Developers

| Applied JavaScript                                                                                       | Intro-to-React                                                                                                                                         | Single Page Application                                                 | TeamWork Capabilities                                                                     | Form Managment                                                     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Utilized Styled Components to style web app. Array methods were used to dynamically render HTML elements | Created dynamic functional components and showcased proper usage of state and props with small reusable components. Usage of webHooks to manage state. | Used Axios to perform GET HTTP requests to database for list of events. | Pair Programmed with React 2 Dev and Back End Architect to deliver top notch web platform | Utilized third party library Formik to create user friendly forms. |

## Senior React Developer

| React Application                                                                                                | HTTP/AJAX                                                                                                                                                           | Sate Management                                                                                                                                                                                                                                                                                                  | TeamWork Capabilities                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| App was set up in a manner that is conducive to a team project environment. Project is organized well on GitHub. | CRUD operations drove the application. Token authentication handeled correctly. HTTP requests handled logically in was cohesive with app's state management system. | Managed state in a very coherent system at all levels of the app - global state management, component tree state management, and individual component management. The system is easy to understand and use. Architected it in such a way that it is reusable for a lot of the state management needs of the app. | Extra considerations were made to help all team members understand how to contribute easily to the project, no matter their role. |

---

# Product Vision Document

## Saltiest Hacker News Commenters

Have you ever wondered who the saltiest user of Hacker News is? Are you annoyed by the prevalence of snark and condescension in the programming community? Are you waiting for the tech bubble to burst so you can scoop up some pre-owned Teslas at bargain bin prices? This app is for you.

#### Minimal Viable Product (MVP)

App rates and ranks hacker news commenters by negativity of comment sentiment (limited to commenters who have made x number of posts). Allows users to search by username to view comments and sentiment levels of specific users.

#### Stretch Goals (Keep in mind this project has to be accomplished in one week)

App also displays the sentiment of individual comments by user allowing drilldown to a user view.

### DS:

- Expand the scope of the sentiment analysis beyond positive or negative to include things like humor, etc.
- Provided dataset extends only to late 2017. Source additional data and leverage it to improve your model.
- Help create visualizations for the trolls that show up most frequently

### Web:

- Create a way to share the funniest/worst trolls on twitter.
- Use filter to display the cards in different ways depending on what the user wants to see and what is available in the DS API (ie funniest, most sarcastic, etc.)
- Create a way to visualize the trolls that show up most frequently in a given time period.

#### Proposal

- What problem does your app solve?

  - Allows users to browse HN users by the sentiment of their comments.

- Be as specific as possible; how does your app solve the problem?
  - Users individual comments are analyzed using NLP and aggregated into a single salty score.
- What is the mission statement?
  - Identify the saltiest users and warn their doctors about their blood pressure.

#### Features

- What features are required for your minimum viable product?

  - ranked list of most negative users
  - search by user
  - view comments by user
  - ability to maintain saved comments (add/remove)
  - login/register/logout

- What features may you wish to put in a future release?
  - view comments by keyword
  - visualization of saltiest users
  - ability to share/tweet posts
  - expand sentiment analysis beyond postitive/negative
  - additional ways of querying/filtering comments in front end

#### What do the top 3 similar apps do for their users?

- Reddit - sorts comments based on user activity (upvote/downvote)
- Youtube - sorts comments based on user activity (upvote/downvote)
- Facebook - sorts comments based on user likes

#### UX Design

- What design system will you use?
  - Adobe XD
  - Styled Components

#### Frameworks and Libraries

- What 3rd party frameworks/libraries are you considering using?

**Frontend:**

- React
- React-router
- Redux
- Redux-Thunk
- Axios
- Yup
- React-Hook-Form
- Styled Components

- Do APIs require you to contact its maintainer to gain access?

  - No

- Are you required to pay to use the API?

  - No

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)

  - N/A

#### Target Audience

- Who is your target audience? Be specific.
  - existing HN users
  - lambda school students & TLs
  - people who have an interest in NLP

## Credits

### Project Manager

[Natalie Davis](https://github.com/FreedomWriter)

### User Interface

[Neel Mazumdar](https://github.com/neel7777)

### Frontend

[Alex Gohorel (senior react dev)](https://github.com/agohorel)

[Greg Hayes (senior react dev)](https://github.com/hayesdev)

[Jason Hemann (junior react dev)](https://github.com/JasonRHemann)

### Backend

[Thomas Katalenas](https://github.com/robomantis19)

### Data Engineers

[Mike Xie](https://github.com/Mike-Xie)

[Chase Goldfeld](https://github.com/AuFeld)

### Machine Learning Engineers

[Nisha Arya Ahemed](https://github.com/nishaarya)

[Riley Jones](https://github.com/rileythejones)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
