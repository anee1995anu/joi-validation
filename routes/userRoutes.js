const express = require('express');
const multer = require('multer');
const { userSchema } = require('../vlidtion/userVlidtion');
const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route to handle user registration
router.post('/register', upload.single('profileImage'), (req, res) => {
  // Validate the form data
  const { error } = userSchema.validate(req.body);

  // Handle validation errors
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).send('Profile image is required');
  }

  // File information available in req.file
  console.log('Uploaded file details:', req.file);

  // Proceed with further processing, e.g., saving user data
  res.send({
    message: 'User registered successfully!',
    fileName: req.file.filename,
  });
});

module.exports = router;