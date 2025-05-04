const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload_images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('image'), (req, res) => {
    console.log('req.file',req.file);
    
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  res.json({ success: true, file: req.file.filename });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
