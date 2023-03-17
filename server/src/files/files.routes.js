const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'images',
        allowedFormats: ['jpg', 'png', 'jpeg']
    },

});

const upload = multer({ storage });


router.post('/images', upload.single('image'), async (req, res) => {
    // console.log(req.image);
    console.log(req.file);
    const url = req.file.path
    try {

        //    const result= await cloudinaryUpload(req.body);
        res.status(200).json({ message: 'Image uploaded', url });
    } catch (error) {
        console.log(error.message);
    }

    // console.log(req.data);

});
router.get('/images', (req, res) => { });



// router.get('/projects/:id/tasks', (req, res, next) => {}, (req, res, next) => {});

module.exports = router;

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads');
//     },
//     filename: (req, file, cb) => {
//         console.log(req.image);
//         console.log(file);
//         cb(null, `${uuidv4()}-${file.originalname}`);
//     } 
// });