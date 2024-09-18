import { Global, Module } from '@nestjs/common';
import { CountriesapiService } from './http/countriesapi.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  providers: [CountriesapiService],
  exports: [CountriesapiService, HttpModule],
})
export class ProvidersModule {}
