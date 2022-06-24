import boom from "@hapi/boom";
require("dotenv").config();

const authHandler = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token === process.env.API_TOKEN) {
      next();
    } else {
      next(boom.unauthorized());
    }
  } catch (error) {
    next(boom.badRequest());
  }
};

export default authHandler;
