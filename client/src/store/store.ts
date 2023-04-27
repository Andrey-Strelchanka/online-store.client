import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/authService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class Store {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.token);
      this.setAuth(true);
      this.user = response.data.data.user;
      console.log(response);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async registration(name: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(name, email, password);
      localStorage.setItem("token", response.data.token);
      this.setAuth(true);
      this.user = response.data.data.user;
      console.log(response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.user = {} as IUser;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(
        "http://localhost:5000/api/users/refresh",
        { withCredentials: true }
      );
      localStorage.setItem("token", response.data.token);
      this.setAuth(true);
      this.user = response.data.data.user;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}
