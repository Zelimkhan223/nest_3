import { Controller, Get } from "@nestjs/common";

@Controller()
export class AdminController {

    @Get('/admin') 
    findAll() {
        return ['ulan', 'aman']
    }
}