function fetchJSONFile(url, returnData) {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
                if (request.readyState === 4) {
                        if (request.status === 200) {
                                // console.log(request.responseText);
                                var data = JSON.parse(request.responseText);
                                if (typeof returnData === 'function') {
                                        returnData(data);
                                }
                        }
                }
        }
        request.open('GET', 'https://api.github.com/users/nofootnotes', true);
        request.send();
}


function returnData (jsonData) {
        console.log(jsonData.name);
        var name = jsonData.name;
        document.getElementById('name').innerHTML = name;
}

fetchJSONFile('https://api.github.com/users/nofootnotes', returnData);