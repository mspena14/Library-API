/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  author!: string;

  @IsNotEmpty()
  @IsDateString()
  publicationDate!: Date;

  @IsNotEmpty()
  @IsString()
  genre!: string;
}
