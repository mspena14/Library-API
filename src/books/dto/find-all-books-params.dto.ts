import { IsDateString, IsOptional, IsString } from 'class-validator';
import { findAllBooksPaginationDto } from './find-all-books-pagination.fto';

export class FindAllBooksParamsDto extends findAllBooksPaginationDto {
  @IsOptional()
  @IsString()
  author!: string;

  @IsOptional()
  @IsDateString()
  publicationDate!: Date;

  @IsOptional()
  @IsString()
  genre!: string;
}
