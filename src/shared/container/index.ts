import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/account/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/account/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);