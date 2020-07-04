// import fakeDB from "./fakeDataBase";

import {fakeReviewData as fRD , fakeSearchData as fSD } from "./fakeData";


const getReviewResponse = (query, response) =>{
  let {department, number, subnumber, year, semester} =  query;
  
  const queryStr = (department + number + subnumber + semester + year).toLowerCase();

  let data = fRD.filter((x) => {
    const info = x.info
    return (
      queryStr === (info.department + info.number + info.subnumber + info.semester + info.year).toLowerCase()
    );
  });
  if (data.length === 0) {
    response['status'] = false;
  }
  response['status'] = true;
  response["data"] = data[0]; 
}; 

const getSearchResponse = (query, response) => {
  const queryStr = query.queryString;
  const result = fSD.filter((x) => {
    const keywordList = queryStr.toLowerCase().split(" ");
    const keyword = new RegExp(keywordList.join(".*"));
    return (x.department + x.number + x.title)
      .toLowerCase()
      .match(keyword);
  });
  if (result.length === 0) {
    response['status'] = false;
  }
  response["result"] = result;
  response["status"] = true;
};
  

const getDataFromBackEnd = (cmd, response, timeout) => {
  if (cmd.type === "data") {
    getReviewResponse(cmd.query, response);
  } else if (cmd.type === "search") {
    getSearchResponse(cmd.query, response);
  }
};


export default {
  get: getDataFromBackEnd,
};


