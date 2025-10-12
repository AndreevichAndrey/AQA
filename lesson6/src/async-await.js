function processingData(data) {
    console.log('Received', data.length, 'posts');
    console.log('First:', data[0]);
}

async function GetData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    return json;
}

(async () => {
    console.log('Processing...');
    const response = await GetData();
    processingData(response);
    console.log('Completed');
})();
