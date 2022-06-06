import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  try {
    const savedHotel = await Hotel.create(req.body);
    res.status(201).json({
      status: true,
      message: "Successfully Created Hotel!",
      data: savedHotel,
    });
  } catch (error) {
    return next(error);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      status: true,
      message: "Successfully Fetched Hotels!",
      data: hotels,
    });
  } catch (error) {
    return next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city });
      })
    );
    res.status(200).json({
      status: true,
      message: "Successfully Fetched List of Hotels!",
      data: list,
    });
  } catch (error) {
    return next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      status: true,
      message: "Successfully Fetched Hotels!",
      data: hotels,
    });
  } catch (error) {
    return next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Successfully Fetched Hotel!",
      data: hotel,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json({
      status: true,
      message: "Successfully Updated Hotel!",
      data: updatedHotel,
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: true,
      message: "Successfully Deleted Hotel!",
    });
  } catch (error) {
    return next(error);
  }
};
