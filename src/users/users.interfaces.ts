import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty()
    id: number;

    @ApiProperty({ example: "Jake" })
    name: string;
}
