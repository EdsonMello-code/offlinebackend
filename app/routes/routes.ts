import { Router } from "express";
import multer from 'multer';
import multerConfig from '../configs/multer';
import UserProfileController from "../controllers/user_profile_controller";


export default class Routes {
    private userProfile = '/user_profile';
    private imageAvatar = '/image_avatar'  
    public router = Router()

     run(): void  {
        const userProfile = new UserProfileController();
        
        this.router.get(this.userProfile,userProfile.getUserProfile);
        this.router.post(this.userProfile,userProfile.createUserProfile);
        this.router.post(this.imageAvatar, multer(multerConfig).single('images'), userProfile.updateAvatar);
    }
}