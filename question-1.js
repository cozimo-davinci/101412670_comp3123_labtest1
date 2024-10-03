function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(arr)) {
            reject('Error: input must be an array')
        } else {
            const items = arr.filter(item => typeof item === 'string');
            if (items.length > 0) {
                resolve(items.map(item => item.toLowerCase()));
            } else {
                reject('Error: no strings found in the array')
            }
        }

    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(err => console.log(err));
