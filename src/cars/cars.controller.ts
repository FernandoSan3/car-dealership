import { Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreatedCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get()
    gellAllCars() {
        return  this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() cratedCarDto: CreatedCarDto) {
        return this.carsService.create(cratedCarDto);
    }

    @Patch(':id')
    updateCar(
        @Body() updateCarDto: UpdateCarDto, 
        @Param('id', ParseUUIDPipe) id: string
    ) {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    }
}
