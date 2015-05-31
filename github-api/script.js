function nameUpdate () {
    var user = document.getElementById("input").value;
    fetchJSONFile('https://api.github.com/users/' + user, returnData);
}


function fetchJSONFile(url, returnData) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                if (typeof returnData === 'function') {
                    returnData(data);
                }
            }
        }
    };
    console.log(url);

    request.open('GET', url, true);
    request.send();
}


function returnData (jsonData) {
    console.log(jsonData.name);
    var name = jsonData.name;
    document.getElementById('name').innerHTML = name;
}