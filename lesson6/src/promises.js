function processingData(data) {
    console.log('Received', data.length, 'posts');
    console.log('First:', data[0]);
}

function GetData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response.status);
            return response.json();
        })
        .then((json) => processingData(json))
        .catch((e) => console.log(e));
}

GetData();
