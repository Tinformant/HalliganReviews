
# TODO List:

## Functional

* marking required field in red in the questionaire 
* **[Talk to Mentor] Design the filter box of the review page**

-[ ] index page
-[ ] routing
-[ ] Log-in and sign-up function

-[ ] make a fake get/post function.
-[ ] search page sorting and filtering
-[ ] change the filter box at search page to check boxes

-[x] change the combo box of review page to plain text
-[ ] change the write review questionaire combo box to plain text
-[x] add accordian for duplicated course with different year and semester


## Styling 

* logo
* name of the website
* search page header styling
* search page search item styling
* design comment card
* search bar drop down menu shadows 




```
function getDataFromBackEnd(cmd: object, response: object, timeout: integer) => void
```

eg1. cmd-response pair for updating review page without filter boxes.
```
cmd: object = {
  type: "data",
  query:{ 
    department: "COMP",
    number: "0160",
    subnumber: "01",
    semester: "Fall",
    year: "2020",
  }
}
response: object = {
  info: {
    title: "Introduction to Algorithm and its Happy Companions",
    department: "COMP",
    number: "0160",
    subnumber: "01", //default subnumber
    instructor: "Matias Korman",
    semester: "Fall",
    year: "2020",
  },
  course: [
    {
      name: "Course Overall",
      description: "overall score for blablabla",
      distribution: [0.1, 0.3, 0.4, 0.1, 0.1],
      average: 2.7,
      details: "some text"
    },
    {
      name: "Material",
      description: "overall score for blablabla",
      distribution: [0.1, 0.3, 0.4, 0.1, 0.1]
      average: 2.7
      details: "some text"
    },
    {
      name: "Work Load",
      description: "overall score for blablabla",
      distribution: [0.1, 0.3, 0.4, 0.1, 0.1] // one star to five stars
      average: 12 // hours  per week
      details: "some text"
    },
    /* still need to work on
    {
      name: "Difficulty or letter grade",
      description: "overall score for blablabla",
      distribution: [0.1, 0.3, 0.4, 0.1, 0.1]
      average: "B-" 
      details: "some text"
    }, */
  ],
  instructor: [
    {
      name: "Instructor Overall",
      description: "blablabla",
      distribution: [0.1, 0.3, 0.4, 0.1, 0.1]
      average: 2.7
      details: "some text"
    },
    {
      name: "Responsive",
      description: "blablabla",
      distribution: [0.1, 0.3, 0.4, 0.1, 0.1]
      average: 2.7
      details: "some text"
    },
    {
      name: "Expressive",
      description: "blablabla",
      distribution: [0.1, 0.3, 0.4, 0.1, 0.1]
      average: 2.7
      details: "some text"
    },
  ],
  comment: [
    {
      username: "Galadriel",
      identity: "graduate",
      date: "05-19-2021",
      grades: "A-",
      workLoad: 10
      courseOverall: 3,
      instructorOverall: 4,
      assessment: "Five assigments + blablabla"
      text:
        "Lnsectetur adipiscing elitim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    ...
  ]
}
```
eg2. cmd-response pair for searchbar autocompleting and showing search results

```
cmd: object = {
  type: "search",
  query:{ 
    queryString: "comp 160", // query string typed in the search bar
    order: "relevant",  // sorting order
  }
}

response: object = {
  result: [
    {
      title: "Introduction to Machine Learning",
      department: "COMP",
      number: "0135",
      subnumber: "01",
      availOption: [
        {
          instructor: "Michael Claude Hughes",
          semester: "Fall",
          year: "2020",
        },
        {
          instructor: "Michael Claude Hughes",
          semester: "Fall",
          year: "2019",
        }
        {
          instructor: "Liping Liu",
          semester: "Fall",
          year: "2018",
        }
        ...
      ]
    },
    {
      title: "Numerical Analysis",
      department: "COMP",
      number: "0125",
      subnumber: "01",
      availOption: [
        {
          instructor: "Misha E Kilmer",
          semester: "Fall",
          year: "2020",
        },
        {
          instructor: "Misha E Kilmer",
          semester: "Fall",
          year: "2019",
        }
      ]
    },
    ...
  ]
}
```

```
function postDataToBackEnd(data: object, response: boolean) => void
```
eg. data from questionaire to backend:
```
data: object = {
  username: "Galadriel",
  identity: "graduate",
  date: "05-19-2021",
  info: {
    title: "Introduction to Algorithm and its Happy Companions",
    department: "COMP",
    number: "0160",
    subnumber: "01", //default subnumber
    instructor: "Matias Korman",
    semester: "Fall",
    year: "2020",
  },
  course: {
    overall: 4,
    material:3,
    workLoad: 13,
    // difficulty(or grade): 'A',
  }
  instructor: {
    overall: 4,
    responsive:3,
    expressive: 13,
    // difficulty(or grade): 'A',
  },
  comment: "Lnsectetur adipiscing elitim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    ...
}
```





<!-- 

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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
