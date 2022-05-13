const express = require('express'); //import xxx from 'ten module here'
const app = express(); //Tạo ra một thực thể của web server (OOP class, instance là một object của cái class đó)
const port = 503; //class Cat --> classes WhiteCat, BlackCat --> class WhiteAndBlackCat

//Routing: GET, POST, PUT, DELETE
app.get('/', (req, res) => {
    res.send('Đây là ông bà nội em. Ông bà em yêu nhau từ thủa chưa có Ti và chưa Vê');
})
app.get('/x', (req, res) => { //req: request; res; response
    var xP = req.params.xP;
    res.send(`Đây là routing từ cái /x. Có param x = ${xP}`);
});
app.get('/xyz', (req, res) => {
    res.send("Nếu bỏ hết cái gạch chéo thì thế nào?");
});

app.listen(port, () => {
    console.log(`Web server đã được bật lên tại địa chỉ ${port}`);
})