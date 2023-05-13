import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  
  ) {}
  
  populateDB() {
    // CARS_SEED
    // BRANDS_SEED
    this.carsService.fillCarsWithSeed(CARS_SEED)
    this.brandsService.fillBrandsWithSeed(BRANDS_SEED)
    return 'SEED executed'
  }
    
}
