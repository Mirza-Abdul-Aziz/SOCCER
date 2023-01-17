import {
  addNewPlayer,
  getPlayers,
  getPlayerWithId,
  UpdatePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")

    // GET endpoint
    .get(getPlayers)

    // POST endpoint
    .post(addNewPlayer);

  app
    .route("/player/:PlayerId")
    // update specific player
    .put(UpdatePlayer)

    //GET specific player with ID
    .get(getPlayerWithId);
};

export default routes;
