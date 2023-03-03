const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

const CLOUD_NAME = "djioc3wq4"
const CLOUD_API_KEY = "985791875161512"
const CLOUD_API_SECRET = "q1vFsJXThlgaz5RAy8RDZ8F4yt0"

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET
})


router.delete('/:public_id', async (req, res) => {
  const { public_id } = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message)
  }
})


module.exports = router;
