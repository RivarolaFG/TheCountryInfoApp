import { Injectable } from '@nestjs/common';
import { CountriesapiService } from 'src/providers/http/countriesapi.service';

@Injectable()
export class CountriesService {

    constructor( private readonly httpService: CountriesapiService ){}
    getAvailableCountries() {
        return this.httpService.getAvailableCountries();
    }
    async getCountryInfo(id:string,idL:string) {
        const border = await this.httpService.getListOfBorderCountries(idL);
       const population = await this.httpService.getPopulationData(id);
       const flag = await this.httpService.getFlagURL(id);
       const info ={
        border: border.borders, 
        population:population.populationCounts,
        flag:flag
       }
       return info
    }



}
