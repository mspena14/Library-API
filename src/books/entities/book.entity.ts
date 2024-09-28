import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('Books')
export class Book {
  @ApiProperty({ description: 'Book ID', example: '1' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ description: 'Book title', example: 'Harry Potter y el prisionero de Azkaban' })
  @Column({type: 'text'})
  title!: string;

  @ApiProperty({description: 'Book author', example: 'J.K. Rowling'})
  @Column({type: 'text'})
  author!: string;

  @ApiProperty({description: 'Book publication date', example: '2024-09-28T17:27:37.900Z'})
  @Column({type: 'date'})
  publicationDate!: Date;

  @ApiProperty({description: 'Book genre', example: 'Fantasía '})
  @Column({type: 'text'})
  genre!: string;

  @ApiProperty({description: 'Book created date', example: '2024-09-28T17:27:37.900Z'})
  @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at!: Date;

  @ApiProperty({description: 'Book updated date', example: '2024-09-28T17:27:37.900Z'})
  @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated_at!: Date;

  @ApiProperty({description: 'Book deleted date', example: 'null'})
  @DeleteDateColumn({type: 'timestamp', default: null})
  deleted_at!: Date;
}
