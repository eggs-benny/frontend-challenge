# WYSPR front end
This is a simple React application that displays a single page website, built using Create React App.
It is deployed here: `https://frontend-wyspr.vercel.app/`

## Getting Started
- Clone this repository to your local machine
- Navigate to the project directory
- Run `npm install` to install dependencies
- Run `npm start` to start the development server
- Open `http://localhost:3000` in your web browser to view the app (it should launch automatically)

## Dependencies
This project includes the following dependencies:
- react
- react-scripts
- MUI
- jest
- jest-fetch-mock

## Notes & Comments
- I have tested the API and the key components. Although this was my first time testing React components, I believe I have good coverage, but may not have picked up all the nuances. However, there were a couple of errors thrown due to my error testing. I have not found a way to avoid these errors without removing the tests.
- To make the code more organized, I refactored the styling elements into separate files.
- As the 'photos' and 'comments' APIs do not have a relationship, I mapped the comments to photos by their indices. While other approaches, including randomization, are possible, I chose this approach as it felt like the easiest one to switch out if (in the future) we wanted to pull all the info from one API, or related ones.
-  The App component is included in case the site were to grow to multiple pages, allowing for routing. Currently, it is not playing much of a role.
- The thumbnail photo size of 150x150 means that photos are narrower on render compared to the example.
-  In line with the example, I have limited the number of posts to 8. However, this logic can be easily amended if more are required.

## Test coverage
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------|---------|----------|---------|---------|-------------------
All files            |   86.95 |    66.66 |     100 |   86.95 |                   
 App                 |     100 |      100 |     100 |     100 |                   
  App.js             |     100 |      100 |     100 |     100 |                   
 components          |      90 |      100 |     100 |      90 |                   
  BlueDot.js         |     100 |      100 |     100 |     100 |                   
  Homepage.js        |    87.5 |      100 |     100 |    87.5 | 17,26             
  Post.js            |     100 |      100 |     100 |     100 |                   
  Watermark.js       |     100 |      100 |     100 |     100 |                   
 styles              |     100 |      100 |     100 |     100 |                   
  Homepage.styles.js |     100 |      100 |     100 |     100 |                   
  Post.styles.js     |     100 |      100 |     100 |     100 |                   
 util                |    82.6 |       50 |     100 |    82.6 |                   
  placeholderApi.js  |    82.6 |       50 |     100 |    82.6 | 7-8,28-29         

## Contributing
Contributions to this project are welcome. If you find any bugs or issues, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

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