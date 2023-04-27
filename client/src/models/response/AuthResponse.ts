import { IUser } from "../IUser";

export interface AuthResponse {
  status: string;
  token: string;
  data: {
    user: IUser;
  };
}
