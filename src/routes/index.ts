import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { usersRoutes } from './users.routes';
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
export { router };