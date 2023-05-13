import { IsString } from "class-validator";

export class CreatedCarDto {
    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;
}