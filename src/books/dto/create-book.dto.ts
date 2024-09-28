/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'Book title', example: 'Harry Potter y el prisionero de Azkaban' })
  @IsNotEmpty()
  @IsString()
  title!: string;

  @ApiProperty({description: 'Book author', example: 'J.K. Rowling'})
  @IsNotEmpty()
  @IsString()
  author!: string;

  @ApiProperty({description: 'Book publication date', example: '2024-09-28T17:27:37.900Z'})
  @IsNotEmpty()
  @IsDateString()
  publicationDate!: Date;

  @ApiProperty({description: 'Book genre', example: 'Fantasía '})
  @IsNotEmpty()
  @IsString()
  genre!: string;
}
