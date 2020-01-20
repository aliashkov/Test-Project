const route = require('express').Router();
var multer = require('multer');
const multerConf = {
  storage: multer.diskStorage({
    destination: function (req, file, next) {
      next(null, './public/uploads')
    },
    filename: function (req, file, next) {
      const ext = file.mimetype.split('/')[1];
      next(null, file.fieldname + '-' + Date.now() + '.' + ext)
    }
  }),
  fileFilter: function (req, file, next) {
    if (!file) {
      next();
    }
    const image = file.mimetype.endsWith('g')
    if (image) {
      next(null, true)
    } else {
      next({ message: "file type not supported" }, false)
    }
  }
}
route.post('/', multer(multerConf).single('image'), function (req, res, next) {
  return res.json(req.file.filename)
})
exports = module.exports = route