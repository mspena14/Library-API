import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Slots')
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  publicationDate!: Date;

  @Column()
  genre!: string;
}
