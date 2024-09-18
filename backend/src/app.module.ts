import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [CountriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
