import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CountriesapiService {
  constructor(private readonly httpService: HttpService) {}
  public async getAvailableCountries() {
    const apiUrl = process.env.COUNTRIES_AC;
    try {
      const response = await firstValueFrom(this.httpService.get(apiUrl));
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async getListOfBorderCountries(id: string) {
    const apiUrl = process.env.COUNTRIES_BORDER + id;
    try {
      const response = await firstValueFrom(this.httpService.get(apiUrl));
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async getPopulationData(id: string) {
    const apiUrl = process.env.COUNTRIES_POP;
    try {
      const response = await firstValueFrom(this.httpService.get(apiUrl));

      const result = response.data.data.find((c) => c.country === id);

      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async getFlagURL(id: string) {
    const apiUrl = process.env.COUNTRIES_FLAG;
    try {
      const response = await firstValueFrom(this.httpService.get(apiUrl));

      const result = response.data.data.find((c) => c.name === id);
      return result.flag;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
