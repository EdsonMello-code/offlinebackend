import { Request, Response } from "express";
import { AppDataSource } from "../database/app_database";
import { UserProfile } from "../models/user_profile";

 export default class UserProfileController {
    async getUserProfile(request: Request, response: Response): Promise<any> {
        const userDatasource = AppDataSource.getRepository(UserProfile)
        try {
            const userProfile =  await userDatasource.find()
            if(userProfile.length == 0) {
               return  response.json(null).status(200)
            }

            return response.json({
                ...userProfile[userProfile.length - 1],
                'syncronized': userProfile[userProfile.length - 1] ? 1 : 0
            }).status(200)
            
        } catch (error) {
            
        }
    }



    async createUserProfile(request: Request, response: Response): Promise<any> {
        const userDatasource = AppDataSource.getRepository(UserProfile)
        console.log('Chegou')

        try {
            const { body } = request
            const { name, gender, avatarImagePath, syncronized } = body

             await userDatasource.insert( { name, gender, avatarImagePath, syncronized, })
            return response.json().status(201)
        } catch (error) {
            console.log(error)
            return response.json().status(400)

        }
    }

    async updateAvatar(request: Request, response: Response): Promise<void>  {
        const { filename } = request.body

        const userDatasource = AppDataSource.getRepository(UserProfile)

      try {
        const userProfile = await userDatasource.find()
        
        if(userProfile.length == 0) {
             response.json({'message': 'User not found'}).status(404)
        }
       await  userDatasource.save({
        ...userProfile[userProfile.length - 1],
        avatarImagePath: `/images/${filename}`
       })

         response.json({
            'message': 'Image Uploaded!'
        }).status(200)
      } catch (error) {
         response.json(error).status(400)
      }
    }
}