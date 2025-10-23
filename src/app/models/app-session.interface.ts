import { IThirdParty } from './third-party.interface';
import { IUser } from './user.interface';

export interface IAppSession {
  thirdParty: IThirdParty;
  user: IUser;
}
