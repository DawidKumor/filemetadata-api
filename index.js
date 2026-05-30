var express = require('express');
var cors = require('cors');
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
let bodyParser = require("body-parser");
require('dotenv').config()

var app = express();
//app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


/*app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => {
  const decodedName = Buffer.from(req.file.originalname, 'latin1').toString('utf8');
  res.json({
    name: decodedName,
    type: req.file.mimetype,
    size: req.file.size
  });
})*/

app.post("/api/fileanalyse", (req, res) => {
  console.log(">>> Otrzymano żądanie na /api/fileanalyse");
  upload.single('upfile')(req, res, function (err) {
    console.log(">>> W callbacku multer, req.file =", req.file);
    if (err) {
      return res.status(400).json({ error: 'File upload error: ' + err.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const rawName = req.file.originalname;
    const decodedName = Buffer.from(rawName, 'latin1').toString('utf8');
    console.log('Surowy originalname:', req.file.originalname);
    console.log('Po Buffer.decode:', Buffer.from(req.file.originalname, 'latin1').toString('utf8'));
    res.json({
      name: decodedName,
      type: req.file.mimetype,
      size: req.file.size
    });
  });
}); 


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
