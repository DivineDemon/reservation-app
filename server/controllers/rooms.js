import { errorHandler } from "./../middleware/errorHandler.js";
import Room from "./../models/Room.js";
import Hotel from "./../models/Hotel.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(201).json({
      status: true,
      message: "Successfully Created Room!",
      data: savedRoom,
    });
  } catch (error) {
    next(error);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      status: true,
      message: "Successfully Fetched Rooms!",
      data: rooms,
    });
  } catch (error) {
    return next(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Successfully Fetched Room!",
      data: room,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json({
      status: true,
      message: "Successfully Updated Room!",
      data: updatedRoom,
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(201).json({
      status: true,
      message: "Successfully Deleted Room!",
    });
  } catch (error) {
    next(error);
  }
};
