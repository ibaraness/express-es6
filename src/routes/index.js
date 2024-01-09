import usersRoute from "./users.js";
import postsRoute from "./posts.js";
import { Router } from "express";

const masterRoute = Router();
masterRoute.use("/users", usersRoute);
masterRoute.use("/posts", postsRoute);

export default masterRoute;