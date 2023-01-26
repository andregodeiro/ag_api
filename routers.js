const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({ message: "Hello, world!" });
});

export { router as default };
