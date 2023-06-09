import { NextFunction, Request, Response } from "express";
import { IUser } from "../../domain/interfaces/UsersInterface";
import { UsersService } from "../services/UsersService";

class UsersController{

  private usersService: UsersService;

  constructor(){
    this.usersService = new UsersService();
  }

  auth(){

  }

  async handleCreateUser(request: Request, response: Response, next: NextFunction){
    try {
      const {name, email, password}: IUser = request.body;

      const userResponse = await this.usersService.executeCreateUser({name, email, password});

      return response.status(201).json(userResponse);
    } catch (error) {
      next(error)
    }
  }

  async handleListUsers(request: Request, response: Response, next: NextFunction){
    try {
      const userResponse = await this.usersService.executeListUsers();

      return response.status(200).json(userResponse);      
    } catch (error) {
      next(error)
    }
  }

  async handleShowUser(request: Request, response: Response, next: NextFunction){
    const {email} = request.params;

    try {
      const userResponse = await this.usersService.executeShowUser(email);

      return response.status(200).json(userResponse);
    } catch (error) {
      next(error)
    }
  }

  async handleUpdateUser(request: Request, response: Response, next: NextFunction){
    try {
      const avatarUrl = request.file?.path;

      const {password, oldPassword, name} = request.body;
      const {user_id} = request;

      const userResponse = await this.usersService.executeUpdateUser(user_id, name, password, oldPassword, avatarUrl);

      return response.status(200).send(userResponse);
    } catch (error) {
      next(error)
    }
  }

  async handleAuthUser(request: Request, response: Response, next: NextFunction){
    try{
      const {email, password} = request.body;

      const authResponse = await this.usersService.executeAuthUser(email, password);

      return response.status(200).send(authResponse);
    } catch (error) {
      next(error)
    }
  }
}

export { UsersController };
