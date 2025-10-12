function sendRequest(request) {
    throw new Error(`Error: unable to fetch ${request}`);
}

function sendBackupRequest(request) {
    // симулируем успешный ответ
    return {
        backUpRequest: request,
        status: 'completed'
    };
}

function sendReqApi() {
    console.log('Sending Request...');
    let response;

    try {
        response = sendRequest('https://www.qwer13341badrequest.com/');
    } catch (e) {
        console.warn(e.message);
        response = sendBackupRequest('https://www.backuprequest.com/');
        if (response.status !== 'completed') {
            throw new Error('Backup request failed!');
        }
    }
    console.log('Response:', response);
}

function LogTestResult() {
    try {
        sendReqApi();
    } catch (e) {
        console.error(e.message);
        console.log('Failed to send request');
    }
}

LogTestResult();
