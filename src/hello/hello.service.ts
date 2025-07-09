import { Injectable } from '@nestjs/common';

// Handle all the business logic here
// Like post request example we want to submit e from 

@Injectable()
export class HelloService {
    getHello():string{
        return 'Hello Service ...'
    }
    getHelloWithName(name:string):string{
        return `Hello ${name} !`
    }
}
