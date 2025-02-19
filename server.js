const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3001;

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Initialize upload variable
const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
const fs = require('fs');
const dir = './uploads';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// Serve static files from public directory
app.use(express.static('public'));

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.send(`File uploaded successfully! Files are stored in: ${path.join(__dirname, 'uploads')}`);
  } catch (error) {
    res.status(500).send('Error uploading file');
  }
});

// Route to list uploaded files
app.get('/files', (req, res) => {
  fs.readdir('./uploads', (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan files');
    }
    const fileList = files.map(file => ({
      name: file,
      url: `/download/${file}`
    }));
    res.json(fileList);
  });
});

// Route to download a file
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.params.filename);
  res.download(filePath, req.params.filename, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
