import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}
  createBook(createBookData: CreateBookDto): Promise<CreateBookDto> {
    const bookCreated = this.bookRepository.create(createBookData);
    return this.bookRepository.save(bookCreated);
  }
}
