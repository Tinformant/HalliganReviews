
var googleSheetUrl = "https://docs.google.com/spreadsheets/d/1sPDYudSaMCLrIzG96Ql4AFylRJlwQcQoQp5W8XR34LE/edit?usp=sharing";

function clickButton() {
    var query = new google.visualization.Query(googleSheetUrl);
    query.setQuery("SELECT * WHERE B CONTAINS 'ME'");
    query.send(handleResponse);
}

function handleResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var dataJSON = JSON.parse(data.toJSON());
    
    var colLabel = dataJSON.cols.map(x => x.label);
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

