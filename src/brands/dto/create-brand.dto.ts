import { IsString,  MinLength } from 'class-validator';
export class CreateBrandDto {
    
    @IsString()
    @MinLength(3)
    readonly name: string;

}
