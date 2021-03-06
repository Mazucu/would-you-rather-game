# “Would You Rather?” Project

This is a web app that lets a user play the “Would You Rather?” game. The game goes as follows: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the "Home" page. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answers after they’ve voted. When the user comes back to the home page, the polling question appears in the “Answered”

## Technologies used:

- React
- Redux
- React Router
- React-Bootstrap

## To run it locally:

- install all project dependencies with `npm install`
- start the app with with `npm start`
  ( Runs the app in the development mode.)<br>
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Note

This project uses a fake backend, so the state will not persit across refreshes.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
