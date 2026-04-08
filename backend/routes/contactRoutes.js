import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("New Contact Form:");
  console.log(name, email, phone, message);

  res.status(200).json({
    success: true,
    message: "Message received successfully",
  });
});

export default router;
