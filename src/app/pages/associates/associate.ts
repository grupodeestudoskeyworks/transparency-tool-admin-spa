import { BaseModel } from '../../@core/models/base-model';

export class Associate extends BaseModel {
  name: string;
  birthday: Date;
  phone: string;
  email: string;
}
