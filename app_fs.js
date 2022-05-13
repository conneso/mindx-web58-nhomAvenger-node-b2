const fs = require('fs')

let fileContent = "Mèo đen"
let array = ["Mèo trắng", "Mèo méo meo..mlem mlem"]
let filePath = "files/cats.txt"

fs.writeFile(filePath, array.join(','), (err) => {
    if (err) throw err;
    console.info('File đã được tạo ở', filePath, array.join(','));
})

fs.appendFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.info('File đã được append ở {0} với nội dung là {1}', filePath, fileContent);
})