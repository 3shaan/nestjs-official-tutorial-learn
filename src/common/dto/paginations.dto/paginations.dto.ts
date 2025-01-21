import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  offset: number;

  @IsOptional()
  @IsPositive()
  limit: number;
}
