
var googleSheetUrl = "https://docs.google.com/spreadsheets/d/1sPDYudSaMCLrIzG96Ql4AFylRJlwQcQoQp5W8XR34LE/edit?usp=sharing";
var results;


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
        // alert('Can not find any result!');
        $("#number-of-search-results").html(0);
        noResults("search-body");
        return;
    }
    
    $("#number-of-search-results").html(dataJSON.rows.length);
    
    clearBox("search-body");
    for (let i = 0; i < dataJSON.rows.length; i++) {
        var row = dataJSON.rows[i].c;
        appendResult("search-body", row);
    }

    // var row = dataJSON.rows[0].c
    // var rowValue = row.map(x => {
    //     if (x === null){
    //         return "";
    //     }else {
    //         return x.v;
    //     }
    // });
    
    // for (let i = 0; i < colLabel.length; i++) {
    //     $("#"+colLabel[i]).html(rowValue[i]);
    // }
    // $("#name").html(data.getValue(0,0));
}

function clearBox(elementID){
    document.getElementById(elementID).innerHTML = "";
}

function noResults(elementID){
    clearBox(elementID);
    var div = document.getElementById(elementID);
    var p = document.createElement('p');
    p.textContent="No results found";
    div.appendChild(p);
}

function appendResult(elementID, row){
    var rowValue = row.map(x => {
        if (x === null){
            return "";
        }else {
            return x.v;
        }
    });
    var div = document.getElementById(elementID);
    var p = document.createElement('p');
    var a = document.createElement('a'); 
    var link = document.createTextNode(rowValue[4]);

    // Append the text node to anchor element. 
    a.appendChild(link);

    // Set the title. 
    a.title = "";

    // Set the href property. 
    a.href = "course.html"+"?"+rowValue[0];

    p.appendChild(a)
    // div.appendChild(p);
    div.appendChild(p);
}

function doSearch() {
    var input = document.getElementById("search-bar-input");
    input.addEventListener("keyup", function(event) {
        console.log('YOU PRESS ENTER');
        if (event.keyCode === 13) {
            
            event.preventDefault();
            
            var inputValue = document.getElementById("search-bar-input").value;
            $("#search-keyword").html(inputValue);
            var query = new google.visualization.Query(googleSheetUrl);
            query.setQuery(`SELECT * WHERE B CONTAINS '${inputValue}'`);
            query.send(handleResponse);
        }
      });
}

doSearch();

