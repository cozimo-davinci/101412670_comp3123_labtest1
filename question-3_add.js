const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs folder has been created')
}

process.chdir(logsDir);

for (let i = 0; i <= 10; i++) {
    const fileName = `logs${i}.txt`;
    fs.writeFileSync(fileName, `Admin has been added into the system, check it in the ${fileName}`);
    console.log(`Created a file with the name ~~> ${fileName}`);
}