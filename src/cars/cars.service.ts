import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreatedCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla',
        // },
        // {
        //     id: uuid(),
        //     brand: 'Honda',
        //     model: 'Civic',
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee',
        // }
    ]

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
    }

    create(createdCarDto: CreatedCarDto) {
        const car: Car = {
            id: uuid(),
            ...createdCarDto
        }
        this.cars.push(car);
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneById(id);

        if(updateCarDto.id && updateCarDto.id !== id) throw new NotFoundException(`Car with id ${id} not found`);

        this.cars  = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id};
                return carDB;
            }
            return car;
        });
        return carDB;
    }

    delete(id: string) {
        const carDB = this.findOneById(id);
        if (!carDB) throw new NotFoundException(`Car with id ${id} not found`);
        this.cars = this.cars.filter(car => car.id !== id);
        return this.cars;
    }

    fillCarsWithSeed(cars: Car[]) {
        this.cars = cars;
    }

}
