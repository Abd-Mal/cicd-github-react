# cicd-github-react

CI/CD using Github Actions to deploy barebone react web application to various 
cloud hosting environments including:
- Netlify

## Prerequisite

- [Node.js & NPM](https://heynode.com/tutorial/install-nodejs-locally-nvm/) 


## Develop & Test

- To use the latest version of `create-react-app`, uninstall the package first
  in case it was previously installed globally: 
```
$ npm uninstall -g create-react-app
```

- Run locally
```
$ npm init react-app cicd-github-react
$ cd cicd-github-react
$ npm start
```

- Then open http://localhost:3000/ to see your app

## Test

- TBD

## Deploy

### Serve with a Static server

- See more info: https://cra.link/deployment

- Generate the build folder
```
$ npm run build
```

- Install static server
```
$ npm install -g serve
$ serve -s build
```

### Netlify
Source: [Deploy a React app to netlify using GitHub Actions](https://dev.to/ktscates/deploy-a-react-app-to-netlify-using-github-actions-3akd)

- Create a `netlify.toml` file locally in the project directory and add `build`
  configurations as shown in the `netlify.toml` file
  
- Generate the build folder which will be use in netlify
```
$ npm run build
```

- Push the changes to the Github repository

- From the browser, go to the Github project repository, go to actions and 
  setup the Node.js workflow, which will generate a `yaml` file. 
  
- Revise the workflow `yaml` file by adding the following:
```
    - name: Netlify Deploy
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
      run: netlify deploy --prod
```  

- From the browser, login to your netlify account and create a new site by 
  drag/drop the build folder generated earlier;
  - a new site will be created; for example [clinquant-bunny-22f52d](https://clinquant-bunny-22f52d.netlify.app)
  - [Optional] setup a custom domain & secure the site with HTTPs
  - The "Site settings" page can be used to configure further; see below;

- Generate a "personal access token" from the "User settings" screen;
  "Applications > OAuth" tab; "Personal access tokens" panel;
  click "new access token"

- Get the "Site ID" from the "Site settings" page of the newly created site above;
  - From the top left near the logo, click the "Company name"
  - Next click the site name then "Site settings"
  - Go to the "General > Site details" tab
  - Copy the "Site ID"

- From the browser, go back to the Github project repository, then go to the 
  main tab "Settings", and left navigation tab "Security > Secrets > Actions";
  - add "Repository secrets" for the netlify Auth Token, and Site ID as follow:
```
NETLIFY_AUTH_TOKEN
NETLIFY_SITE_ID
```

- 

## References

- [Create React App > Getting Started](https://create-react-app.dev/docs/getting-started)


## [ORIGINAL README] Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
