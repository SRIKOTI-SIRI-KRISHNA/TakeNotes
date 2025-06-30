import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  //per user=>jhon
  try {
    const { success } = await ratelimit.limit("my-rate-limit");
    if (!success) {
      return res.status(429).json({
        message: "Too many requests , please try again later",
      });
    }
    // ratelimit
    next();
  } catch (error) {
    console.log("Rate limt error", error);
    next(error);
  }
};
export default rateLimiter;
