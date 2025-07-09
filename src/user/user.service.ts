import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {

    // injecting services from other modules
    // hello module must export hello service
    // user module must import hello module
    constructor(private readonly helloService: HelloService) { }
    getAllUsers() {
        return [
            {
                id: 1,
                name: "user 1"
            },
            {
                id: 2,
                name: "user 2"
            },
            {
                id: 3,
                name: "user 3"
            },
        ]
    }

    getUserById(id: number) {
        const user = this.getAllUsers().find(user => user.id === id)
        return user
    }

    getWelcomeMessage(userId: number) {
        const user = this.getUserById(userId);
        if (!user) {
            return "User Not Found !";
        }

        return this.helloService.getHelloWithName(user?.name)

    }
}
