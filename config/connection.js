const Sequelize = require('sequelize');
const cloudinary = require('cloudinary');
require('dotenv').config();

let sequelize;
cloudinary.config({ 
  cloud_name: process.env.Cloud_Name, 
  api_key: process.env.API_Key,
  api_secret: process.env.API_Secret
});
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
// module.exports = cloudinary;
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
//   });
//   const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "Dogs",
//   allowedFormats: ["jpg", "png"],
//   transformation: [{ width: 225, height: 225, crop: "limit" }]
//   });
//   const parser = multer({ storage: storage });