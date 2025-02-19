# File Uploader Application

A simple yet powerful Node.js file uploader with a modern UI, built using Express and Multer.

## Features

- 🌈 Attractive gradient design with animations
- 📁 File upload with drag-and-drop support
- 📊 Real-time upload progress indicator
- 📂 List of uploaded files with download icons
- 🎨 Modern, responsive UI using Tailwind CSS (via CDN)
- 📱 Mobile-friendly interface
- ✨ Interactive hover and click effects
- 🎉 Smooth transitions and animations

## Technologies Used

- Node.js
- Express.js
- Multer (for file handling)
- JavaScript (for front-end interactivity)
- Tailwind CSS (via CDN for styling)
- Font Awesome (for icons)
- XMLHttpRequest (for upload progress)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/file-uploader.git
   ```

2. Navigate to the project directory:
   ```bash
   cd file-uploader
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open your browser and visit:
   ```
   http://localhost:3001
   ```

## Project Structure

```
file-uploader/
├── public/
│   └── index.html        # Front-end interface
├── uploads/              # Directory for uploaded files
├── server.js             # Back-end server code
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Usage

1. **Uploading Files**
   - Click the upload area or drag and drop files
   - Supported file types: All types
   - Max file size: 10MB

2. **Managing Files**
   - View all uploaded files in the list
   - Click any file to download it