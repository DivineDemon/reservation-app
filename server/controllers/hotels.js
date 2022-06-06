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
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 1000 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (error) {
    return next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.find({ city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    return next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
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
