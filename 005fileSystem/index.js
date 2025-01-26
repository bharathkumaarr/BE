const fs = require('fs');
const path = require('path');


const dataFolder = path.join(__dirname, 'data');
if (!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('data folder created');
}


const filePath = path.join(dataFolder, 'example.txt');
// sync

fs.writeFileSync(filePath, 'hello after creating and writing file ')
console.log('file created successfully');


const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log('file content: ', readContentFromFile);


fs.appendFileSync(filePath, '\nthis is the new line written');
console.log('new file content appended');


// async

const asyncFilePath = path.join(dataFolder,'async-example.txt');
fs.writeFile(asyncFilePath, 'hello this is async way', (err)=> {
    if (err) throw err;
    console.log('async file created and written succesfully');

    fs.readFile(asyncFilePath, 'utf8', (err,data)=> {
        if(err) throw err;
        console.log('async file content: ', data)

        fs.appendFile(asyncFilePath, '\nthis is the new line appended', (err)=> {
            if (err) throw err;
            console.log('new line appended')

            fs.readFile(asyncFilePath, 'utf8', (err,updatedData)=> {
                if(err) throw err;
                console.log('appended file content: ', updatedData);
            })
        })
    })
})
