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

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this return a coffee with id ${id}`;
  }

  @Post()
  // if i use @Body('name) , then only the name will be returned
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return `this action update a coffee with id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action remove a coffee with id ${id}`;
  }
}
