import { Router } from 'express';
import { CreateUserController } from '../modules/account/useCases/createUser/CreateUserController';

const createUserController = new CreateUserController();
const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };