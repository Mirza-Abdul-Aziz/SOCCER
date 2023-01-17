import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModels";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPLayer = new Player(req.body);
  newPLayer.save((err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};
