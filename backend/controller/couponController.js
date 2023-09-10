const express = require("express");
const { isSeller } = require("../middleware/auth");
const router = express.Router();
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const Coupon = require("../model/couponModel");

router.post(
  "/create-coupon-code",
  isSeller,
  catchAsyncError(async (req, res, next) => {
    try {
      const isCouponCodeExist = await couponCode.find({ name: req.body.name });

      if (isCouponCodeExist) {
        return next(new ErrorHandler("This coupon is already exist", 400));
      }

      const couponCode = await Coupon.create(req.body);

      res.status(200).json({
        success: true,
        couponCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);
