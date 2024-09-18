import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { ProvidersModule } from 'src/providers/providers.module';
import { CountriesapiService } from 'src/providers/http/countriesapi.service';

@Module({
  imports: [ProvidersModule],
  providers: [CountriesService, CountriesapiService],
  controllers: [CountriesController],
})
export class CountriesModule {}
