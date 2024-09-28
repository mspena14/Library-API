import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at!: Date;

  @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated_at!: Date;

  @DeleteDateColumn({type: 'timestamp', default: null})
  deleted_at!: Date;
}
