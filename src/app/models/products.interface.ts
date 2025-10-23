import { IUnderwriter } from './underwriters.interface';

export interface IProduct {
  _id: string;
  id: string;
  policyName: string;
  policyNickName: string;
  productWebUrl: string;
  underwriters: IUnderwriter[];
}
