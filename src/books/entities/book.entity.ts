import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Books')
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'text'})
  title!: string;

  @Column({type: 'text'})
  author!: string;

  @Column({type: 'date'})
  publicationDate!: Date;

  @Column({type: 'text'})
  genre!: string;
}
