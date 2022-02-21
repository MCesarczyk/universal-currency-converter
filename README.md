I've decided to refactor this app completely, removed obsolete "Calculate" button, replacing it with one, triggering useful "Switch currencies" feature.\
It was possible thanks to debounce functionality, so now the result is calculating "on the fly", immediately after user stop writing down letters into form 😎

![picking currencies](src/assets/images/picking_currencies.gif)

Using this converter on everyday basis, inability of quick currencies switch bothered me the most 😫 ...\  so here it is! 🎉

![switching currencies](src/assets/images/switching_currencies.gif)

Obviously, language switcher is also onboard,\ now it got look refreshment with english and polish language flags on buttons. 👩🏿👦🏻🧔🏾👩👳🏿‍♂️

![changing UI language](src/assets/images/changing_language.gif)
***
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).