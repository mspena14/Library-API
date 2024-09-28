import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}
  async createBook(createBookData: CreateBookDto): Promise<CreateBookDto> {
    const bookCreated = this.bookRepository.create(createBookData);
    return await this.bookRepository.save(bookCreated);
  }

  async findAllBooks(): Promise<Book[]>{
    const books = await this.bookRepository.find()
    if (books.length === 0) throw new NotFoundException("Books not found")
    return books;
  }
}
