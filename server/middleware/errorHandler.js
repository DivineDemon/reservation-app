export const errorHandler = (err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went Wrong!";
  res.status(errStatus);
  res.json({
    success: false,
    status: errStatus,
    message: err.message,
    // node: process.env.NODE_ENV,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};