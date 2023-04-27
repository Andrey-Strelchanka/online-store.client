import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/api/users/login", { email, password });
  }

  static async registration(
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/api/users/registration", {
      name,
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    return $api.post("/api/users/logout");
  }
}
