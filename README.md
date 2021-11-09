
## Available Scripts

1. `yarn start` to run the app in development mode.
2. `yarn build` to build the app for production
2. `yarn test` launches the test runner in the interactive watch mode.


### Code Splitting & Conventions

1. The Components that are attached to routes should be in `/containers/`. And the sub components for the containers should be `/containers/*YourCoponent*/components/`.
2. Styled components used for styling the application. Styles files must have an extension `*.styles.js`.
3. Reusable components should be in `/components`.
4. Folder/Directory names should be in Lowercase.
5. Component names should be written in camelcase with first letter capitalized.
6. Actions and Reducers should be declared in `/slice` folder with extension like `*.slice.js`.
7. The API / Asynchronous logic should be in `/services/` and can be imported in actions.
8. Graphql queries and mutations can be declared in `/constants/graphql`.
9. Use terminal to commit the code to activate pre-commit hook for code formatting.
10. All unit testcase files need to write in `__tests__` folder.


### Developer Points

1. We can consume graphql services using axios client.
2. We need to import axios from `/api` when we comsume Graphql services.
3. All components must be Functional Components.
5. For development install nodemon globally  `yarn add nodemon -g`.