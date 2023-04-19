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
This project was created using Create React App and includes the following dependencies:

react
react-dom
react-scripts

## Notes & Comments
- As 'photos' and 'comments' APIs are unrelated, I've pulled comments in by photo index. Other approaches are possible (inc randomisation), but this felt like the easiest to switch out if the APIs became related.
- The App page is there in case the site should grow to multiple pages, allowing for routing.
- Thumbnail photo size means photos are narrow on render compared to the example.
- Limited number of posts to 8 in line with the example, but this logic can be amended if more are required.

## Test coverage

Overall, good test coverage, some issues with error testing to be ironed out and discussed:

---------------------|---------|----------|---------|---------|-------------------
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
---------------------|---------|----------|---------|---------|-------------------

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