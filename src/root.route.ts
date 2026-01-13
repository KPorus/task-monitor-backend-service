import { authenticateJWT } from "@/middlewares/auth.middleware";
import { authRouter } from "./modules/auth/routes";
import { Router } from "express";
import { teamRouter } from "./modules/team/routes/team.route";

const router = Router();

const moduleRoutes = [
  {
    protected: false,
    path: "/auth",
    module: authRouter,
  },
  {
    protected: true,
    path: "/team",
    module: teamRouter,
  },
];

moduleRoutes.forEach((route) => {
  if (route.protected) {
    router.use(route.path, authenticateJWT, route.module);
  } else {
    router.use(route.path, route.module);
  }
});

export default router;
