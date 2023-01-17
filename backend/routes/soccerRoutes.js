import {
  addNewPlayer,
  getPlayers,
  getPlayerWithId,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")

    // GET endpoint
    .get(getPlayers)

    // POST endpoint
    .post(addNewPlayer);

  app.route("/player/:PlayerId").get(getPlayerWithId);
};

export default routes;
