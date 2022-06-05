import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { errorHandler } from "../middleware/errorHandler.js";
import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      country: req.body.country,
      img: req.body.img,
      city: req.body.city,
      phone: req.body.phone,
      password: hash,
      isAdmin: req.body.isAdmin,
    });

    await newUser.save();
    res.status(201).json({
      status: true,
      message: "Successfully Created User!",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(errorHandler(404, "User not found!"));
    } else {
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (isMatch) {
        const { password, isAdmin, ...otherDetails } = user._doc;
        const token = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRET
        );

        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({
            status: true,
            message: "Successfully Logged In!",
            data: otherDetails,
          });
      } else {
        return next(errorHandler(400, "Invalid Password!"));
      }
    }
  } catch (error) {
    next(error);
  }
};
