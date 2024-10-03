const fs = require('fs');
const path = require('path');


const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    console.log("Started to remove log files ....")


    fs.readdirSync(logsDir).forEach(file => {
        const filePath = path.join(logsDir, file);

        console.log(`Started to delete file: ${file}`);

        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsDir);
    console.log("Logs directory has beeen removed successfully!")
} else {
    console.log("Logs directory doesn't exist");

}