import { IKeyValueName } from './key-value-name.interface';
import { IProduct } from './products.interface';

export interface IThirdParty {
  _id: string;
  thirdPartyId: string;
  name: string;
  referralCode: string;
  logoUrl: string;
  faviconUrl: string;
  afterSalesAgent: {
    _id: string;
    userName: string;
    email: string;
    feduid: string;
    phoneNumber: string;
    promo: string;
  };
  preSalesAgent: {
    _id: string;
    userName: string;
    email: string;
    feduid: string;
    phoneNumber: string;
    promo: string;
  };
  segments: IKeyValueName[];
  products: IProduct[];
  _date: any;
  _timestamp: number;
  dangerColor: string;
  infoColor: string;
  onPrimaryColor: string;
  onSecondaryColor: string;
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  tenantHost: string;
  warningColor: string;
  coverImageUrl: string;
  channel: {
    channel_actor: string;
    channel_org: string;
    channel_platform: string;
    channel_tenant: string;
  };
  onDangerColor: string;
  onInfoColor: string;
  onSuccessColor: string;
  onWarningColor: string;
  tags: string[];
}
