const fs = require('fs')
const os = require('os')

//let system = os.platform
const system = 'win32'
let path = 'interOS/internode/files2/usernames.txt'

console.log(path2)
switch (system) {
    case 'win32':
        let path2 = path.split('/').join('\\')
        fs.readFile(path2, 'utf-8', (err, data) => {
            if(err){
                console.log(err)
                return
            }
            console.log(data)
            console.log('first')
        }) 
        break;

    default:

        break;
}


