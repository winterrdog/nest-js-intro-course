import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";
import { User } from "./users.interfaces";
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiQuery,
    ApiTags,
} from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @ApiOkResponse({
        type: User,
        isArray: true,
        description: "returns all users stored on the backend",
    })
    @ApiQuery({ name: "name", required: false })
    @Get()
    getUsers(@Query("name") name?: string): User[] {
        return this.userService.findAll(name);
    }

    @ApiCreatedResponse({
        type: User,
        description: "returns the created user object",
    })
    @ApiBadRequestResponse({
        description: "when malformed input is passed into the application",
    })
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.userService.createUser(body);
    }

    @ApiOkResponse({ type: User, description: "returns user with input id." })
    @ApiNotFoundResponse({
        description: "when user with input ID is not found",
    })
    @Get(":id")
    getUserById(@Param("id", ParseIntPipe) id: number): User {
        const user = this.userService.findById(id);

        if (!user) throw new NotFoundException(`id ${id} not found`);

        return user;
    }
}
