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
