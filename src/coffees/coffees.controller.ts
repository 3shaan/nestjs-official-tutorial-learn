import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeesDto } from './dto/create-coffees.dto/create-coffees.dto';
import { UpdateCoffeesDto } from './dto/update-coffees.dto/update-coffees.dto';
import { PaginationDto } from 'src/common/dto/paginations.dto/paginations.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationDto) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll(paginationQuery);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  // if i use @Body('name) , then only the name will be returned
  // @HttpCode(HttpStatus.GONE)
  create(@Body() body: CreateCoffeesDto) {
    return this.coffeesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateCoffeesDto) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
