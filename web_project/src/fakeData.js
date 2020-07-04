const getRandomDist = (length) => {
  const randomArray = [...new Array(length)].map(() => Math.random());
  const sum = randomArray.reduce((acc, cur) => cur + acc);
  const dist = randomArray.map((x) => x / sum);
  return dist;
};

const courseData = [
  {
    name: "General",
    description: "umsan in nisl e eu. Sagittis tur purus ut",
    distribution: getRandomDist(5),
    average: "2.7",
    details: "Detail about blablablablabla",
  },
  {
    name: "Material",
    description: "elerisque eu. Sagittis id consectetur purus ut",
    distribution: getRandomDist(5),
    average: "2.7",
    details: "Detail about blablablablabla",
  },
  {
    name: "Work Load",
    description: " Sagittis id consectetur purus ut",
    distribution: getRandomDist(5),
    average: "3.7",
    details: "Detail about blablablablabla",
  },
  {
    name: "Difficulty",
    description: "Accumsan in nisl nonsectetur purus ut",
    distribution: getRandomDist(5),
    average: "2.6",
    details: "Detail about blablablablabla",
  },
];
const instructorData = [
  {
    name: "General",
    description: "Accumsan in nisl nistis id consectetur purus ut",
    distribution: getRandomDist(5),
    average: "2.6",
    details: "Detail about blablablablabla",
  },
  {
    name: "Responsive",
    description:
      "Accumsan in nisl nisiscelerisqu Sagittis id consectetur purus ut",
    distribution: getRandomDist(5),
    average: "2.6",
    details: "Detail about blablablablabla",
  },
  {
    name: "Expressive",
    description:
      "Accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut",
    distribution: getRandomDist(5),
    average: "2.6",
    details: "Detail about blablablablablals",
  },
];

const commentData = [
  {
    username: "Galadriel",
    identity: "graduate",
    date: "05-19-2021",
    grade: "A-",
    workLoad: 10,
    courseOverall: 3,
    instructorOverall: 4,
    assessment: "Five assigments + blablabla",
    text:
      "Dolore magna aliqua.A scelerisque purus semper eget duis. ",
  },
  {
    username: "Galadriel",
    identity: "graduate",
    date: "05-19-2021",
    grade: "A-",
    workLoad: 10,
    courseOverall: 3,
    instructorOverall: 4,
    assessment: "Five assigments + blablabla",
    text:
      "ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Convallis posuere mor",
  },
  {
    username: "Galadriel",
    identity: "graduate",
    date: "05-19-2021",
    grade: "A-",
    workLoad: 10,
    courseOverall: 3,
    instructorOverall: 4,
    assessment: "Five assigments + blablabla",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Convallis posuere morbi leo urnamolestie at. Eget egestas purus viverra accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer eni ",
  },
];

const fakeReviewData = [
  {
    info: {
      title: "Introduction to Algorithm and its Happy Companions",
      department: "COMP",
      number: "0160",
      subnumber: "01",
      instructor: "M. Korman",
      semester: "Fall",
      year: "2020",
    },
    comment: commentData,
    course: courseData,
    instructor: instructorData,
  },
  {
    info: {
      title: "Numerical Analysis",
      department: "COMP",
      number: "0125",
      subnumber: "01",
      instructor: "M. Kilmer",
      semester: "Fall",
      year: "2020",
    },
    comment: commentData,
    course: courseData,
    instructor: instructorData,
  },
  {
    info: {
      title: "Introduction to Machine Learning",
      department: "COMP",
      number: "0135",
      subnumber: "01",
      instructor: "M. Hughes",
      semester: "Fall",
      year: "2020",
    },
    comment: commentData,
    course: courseData,
    instructor: instructorData,
  },
  {
    info: {
      title: "Introduction to Machine Learning",
      department: "COMP",
      number: "0135",
      subnumber: "01",
      instructor: "L. Liu",
      semester: "Fall",
      year: "2019",
    },
    comment: commentData,
    course: courseData,
    instructor: instructorData,
  },
];

const fakeSearchData = [
  {
    title: "Introduction to Machine Learning",
    department: "COMP",
    number: "0135",
    subnumber: "01",
    availOption: [
      {
        instructor: "M. Hughes",
        semester: "Fall",
        year: "2020",
      },
      {
        instructor: "L. Liu",
        semester: "Fall",
        year: "2019",
      },
    ],
  },
  {
    title: "Introduction to Algorithm and its Happy Companions",
    department: "COMP",
    number: "0160",
    subnumber: "01",
    availOption: [
      {
        instructor: "M. Korman",
        semester: "Fall",
        year: "2020",
      },
    ],
  },
  {
    title: "Numerical Analysis",
    department: "COMP",
    number: "0125",
    subnumber: "01",
    availOption: [
      {
        instructor: "M. Kilmer",
        semester: "Fall",
        year: "2020",
      },
    ],
  },
];


// export default dataBase;
export {
    fakeReviewData,
    fakeSearchData
};
