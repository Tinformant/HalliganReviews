# Questionaire

## Fundamental information
* When do you take the course?
    * year (select from options `<select>`)
    * semester (select from options `<select>`)
* Who is your instructor (selected automatically after the former two options are selected)

## About the course(star rating out of 5)
* How do you rate the course in general? 
* How do you rate the materials provided? 
* How useful do you think the course is?
* How is the workload of the course?
* How difficult do you think the course is?

## About the instructor
* How do you rate the instructor in general?
* How do you rate the instructor's effectiveness in replying to questions outside the class and returning assignment?
* How do you rate the class management of the instructor?
* How do you rate the delivery of the instructor?

## Comments
* (option)Assessment method of the class, e.g. assignments and quizzes
* (option) something special?

## Personal information?
* Anonymous? (checked or not)
* Student identity (chosen from undergraduate, graduate, prefer not to answer or other)
* Date (not shown in the form but saved in the database)

# Data to be collected

## Raw data from the questionaire
* course name
* course number and subnumber
* year and semester
* instructor
* ratings
* comments
* student name
* anonymous or not
* student identity
* date

## User information 
* User's name
* User's email
* User's password

## Course information
* course name
* course number
* course subnumber
* instructors and corresponding semesters and years

## Course reviews
* course information
    * course name
    * course number
    * course subnumber
    * year
    * semester
    * instructor
* comments
* course ratings
* instructor ratings

e.g :
```
const courseData = [{
        name: "General",
        data: {
            undergraduate: [5, 1, 5, 20, 25], // number of people rating, e.g. 5 persons say it is terrible, 1 person say it is fair, etc.
            graduate: [4, 1, 5, 20, 20],
            other: [1, 2, 3, 1, 5],
        },
    },
    {
        name: "Material",
        data: {
            undergraduate: [15, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [6, 2, 3, 4, 5],
        },
    },
    {
        name: "Usefulness",
        data: {
            undergraduate: [5, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [1, 2, 3, 4, 5],
        },
    },
    {
        name: "Work Load",
        data: {
            undergraduate: [5, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [1, 2, 3, 4, 5],
        },
    },
];
const instructorData = [{
        name: "General",
        data: {
            undergraduate: [5, 1, 5, 20, 25],
            graduate: [4, 1, 5, 20, 20],
            other: [1, 2, 3, 1, 5]
        },
    },
    {
        name: "Responsive",
        data: {
            undergraduate: [5, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [1, 2, 3, 4, 5]
        },
    },
    {
        name: "Expressive",
        data: {
            undergraduate: [5, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [1, 2, 3, 4, 5]
        },
    },
];
const commentData = [{
        userName: "Leopold James Fitz",
        status: "graduate",
        date:"6,5,2020",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Convallis posuere morbi leo urnamolestie at. Eget egestas purus viverra accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    {
        userName: "Jemma Anne Simmons",
        status: "graduate",
        date:"6,5,2020",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Convallis posuere morbi leo urnamolestie at. Eget egestas purus viverra accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    {
        userName: "Hermione Jane Granger",
        status: "undergraduate",
        date:"6,15,2020",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    {
        userName: "Aemon Targaryen",
        status: "other",
        date:"3,21,2018",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    {
        userName: "Galadriel",
        status: "other",
        date:"5,1,1999",
        comment: "Lnsectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
];

const data = {
    info: {
        title: "Introduction to Algorithm and its Happy Companions",
        department: "COMP",
        number: "0160",
        subnumber: "00",
        instructor: ["Tyrion"],
        semester: ["Fall"],
        year: ["2020"],
    },
    comment: commentData,
    course: courseData,
    instructor: instructorData,
};
```
