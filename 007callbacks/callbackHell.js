const fs = require('fs');

fs.readFile('input.txt','utf8' ,(err,data)=> {
    if(err){
        console.error('error reading the file', err)
        return
    }
    const modifyFileData = data.toUpperCase();
    fs.writeFile('output.txt', modifyFileData, (err)=> {
        if (err) {
            console.error('error wrting file', err);
            return;
        }
        console.log('data written to new file')

        fs.readFile('output.txt', 'utf8', (err,data)=> {
            if (err) {
                console.error('error reading the file', err);
                return
            }
            console.log(data);
        })
    })
})