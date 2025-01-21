import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffees.entity';
import { Flavor } from './entities/flavor.entity';
import { Events } from 'src/event/entities/event.entity/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Events])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
