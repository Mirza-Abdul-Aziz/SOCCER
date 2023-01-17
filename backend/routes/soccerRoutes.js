import {
  addNewPlayer,
  deletePlayer,
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
    .get(getPlayerWithId)

    // Delete specific player
    .delete(deletePlayer);
};

export default routes;
