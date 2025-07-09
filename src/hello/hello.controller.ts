import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

// express =>

// service.js => route, controller, service
//  route A => controller A => service A


//  in nest js 
// controller in responsible for incoming requests and returning responses back to the client. 

// here we write any http method like get/post/put/delete etc..

@Controller('hello')
export class HelloController {

    constructor(private readonly helloService: HelloService) { }
    @Get()
    getHello(): string {
        return this.helloService.getHello()
    }
    @Get("users/:name")
    getHelloWithName(@Param("name") name: string): string {
        return this.helloService.getHelloWithName(name)
    }
    @Get('query')
    getHelloWithQuery(@Query("name") name: string): string {
        return this.helloService.getHelloWithName(name || "World")

    }
}
