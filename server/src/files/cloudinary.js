const cloudinary = require('cloudinary').v2;
// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

 
// Upload



 const cloudinaryUpload = async (file) => {
    try {

        const result = await cloudinary.uploader.upload(file, (err, result) => {
            console.log(result);
            console.log(err);
        });
        return result;
    } catch (error) {
        console.log(error.message);
    }
};
module.exports = { cloudinaryUpload , cloudinary};

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', { public_id: "olympic_flag" })

// res.then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
// }).catch((err) => {
//     console.log(err);
// });


// Generate 
const url = cloudinary.url("olympic_flag", {
    width: 100,
    height: 150,
    Crop: 'fill'
});



// The output url
console.log(url);