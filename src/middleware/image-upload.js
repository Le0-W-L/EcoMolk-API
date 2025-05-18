const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', '..', 'public', 'uploads')); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + String(Math.floor(Math.random() * 1000)) + path.extname(file.originalname));
  }
});

const upload = multer({
    storage: storage,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Por favor, envie apenas arquivos PNG ou JPG!'))
        }
        cb(undefined, true);
    },
})

module.exports = upload;