import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {
  try {
    const savedHotel = await Hotel.create(req.body);
    res.status(201).json({
      status: true,
      message: "Successfully Created Hotel!",
      data: savedHotel,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      status: true,
      message: "Successfully Fetched Hotels!",
      data: hotels,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
