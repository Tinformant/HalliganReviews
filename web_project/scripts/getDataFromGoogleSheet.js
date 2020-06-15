
var googleSheetUrl = "https://docs.google.com/spreadsheets/d/1sPDYudSaMCLrIzG96Ql4AFylRJlwQcQoQp5W8XR34LE/edit?usp=sharing";
var title;

function clickButton() {
    var courseList = ["ME", "COMP", "EE"];
    var query = new google.visualization.Query(googleSheetUrl);
    query.setQuery(`SELECT * WHERE B CONTAINS  '${courseList[getRandomInt(3)]}'`);
    query.send(handleResponse);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function handleResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    
    var data = response.getDataTable();
    console.log(data);
    
    
    var dataJSON = JSON.parse(data.toJSON());
    
    var colLabel = dataJSON.cols.map(x => x.label);
    console.log(dataJSON);
    if (dataJSON.rows.length === 0) {
        alert('Can not find any result!');
        return;
    }
    var row = dataJSON.rows[0].c
    var rowValue = row.map(x => {
        if (x === null){
            return "";
        }else {
            return x.v;
        }
    });
    
    for (let i = 0; i < colLabel.length; i++) {
        $("#"+colLabel[i]).html(rowValue[i]);
    }
    // $("#name").html(data.getValue(0,0));
}

function search() {
    
    var input = document.getElementById("search-bar-input");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            
            event.preventDefault();
            
            var inputValue = document.getElementById("search-bar-input").value;
            var query = new google.visualization.Query(googleSheetUrl);
            query.setQuery(`SELECT * WHERE B CONTAINS '${inputValue}'`);
            query.send(handleResponse);
        }
      });
}

function updateInfo(){
    var url = window.location.href;
    if (!url.includes("?")){
        return;
    }
    var urlParse = url.split("?");
    var id = urlParse[1];
    console.log(id);
    var query = new google.visualization.Query(googleSheetUrl);
    query.setQuery(`SELECT * WHERE A CONTAINS '${id}'`);
    query.send(handleResponse);

}

google.setOnLoadCallback(updateInfo);
search();

