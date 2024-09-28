import { IsDateString, IsOptional, IsString } from 'class-validator';

export class FindAllBooksParamsDto {
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
