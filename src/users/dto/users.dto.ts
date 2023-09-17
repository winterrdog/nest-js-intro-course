import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        example: "Ddiba",
    })
    @IsAlphanumeric()
    @MaxLength(12)
    name: string;
}
