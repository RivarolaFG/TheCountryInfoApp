import { Body, Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('available')
  async getAvailableCountries() {
    return this.countriesService.getAvailableCountries();
  }
  @Get('getCountryInfo/:id')
  async getCountryInfo(@Param('id')  id: string) {
    const body = id.split("_");
    return this.countriesService.getCountryInfo(body[0],body[1]);
  }
}