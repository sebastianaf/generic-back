import express from "express";
import { models } from "../db/sequelize";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await models.User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

export default router;
