import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('signup') // end point to signup
    signup(){
        return this.authService.signup()
    }

    @Post('signin')// end point to signin
    signin(){
        return this.authService.signin()
    }
    
}