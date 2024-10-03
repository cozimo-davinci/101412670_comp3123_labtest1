const resolvedPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        let success = { 'message': "delayed resolve" };
        console.log(success);
        resolve(success);

    }, 500)
});

const rejectedPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {

        let error = { 'error': "delayed reject" };
        console.error(error);
        reject(error);

    }, 500)
});

resolvedPromise()
    .then(result => console.log("Resolved: ", result))
    .catch(err => console.log("Error: ", err));


rejectedPromise()
    .then(result => console.log("Resolved: ", result))
    .catch(err => console.log("Error: ", err));