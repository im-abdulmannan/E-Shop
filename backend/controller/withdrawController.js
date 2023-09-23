const express = require("express");
const { isSeller } = require("../middleware/auth");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const Withdraw = require("../model/withdrawModel");
const router = express.Router();

// Create withdraw request -- seller
router.post(
  "/create-withdraw-request",
  isSeller,
  catchAsyncError(async (req, res, next) => {
    try {
      const { amount } = req.body;
      const data = {
        seller: req.seller._id,
        amount,
      };

      const withdraw = await Withdraw.create(data);

      res.status(201).json({
        success: true,
        withdraw,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
