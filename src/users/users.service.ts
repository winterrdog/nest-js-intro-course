import { Injectable } from "@nestjs/common";
import { User } from "./users.interfaces";
import { CreateUserDto } from "./dto/users.dto";

@Injectable()
export class UsersService {
    private users: User[] = [{ id: 0, name: "Jake" }];

    findAll(name?: string): User[] {
        if (name)
            return this.users.filter(
                (user) => user.name.toLowerCase() === name,
            );

        return this.users;
    }

    findById(userId: number): User {
        return this.users.find((user) => user.id === userId);
    }

    createUser(createUserDto: CreateUserDto): User {
        const newUser: User = {
            id: Date.now(),
            ...createUserDto,
        };

        this.users.push(newUser);

        return newUser;
    }
}
