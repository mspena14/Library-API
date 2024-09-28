import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { FindAllBooksParamsDto } from './dto/find-all-books-params.dto';


@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}
  async createBook(createBookData: CreateBookDto): Promise<CreateBookDto> {
    const bookCreated = this.bookRepository.create(createBookData);
    return await this.bookRepository.save(bookCreated);
  }

  async findAllBooks(params: FindAllBooksParamsDto): Promise<Book[]>{
    const query = this.validateParamsForFindAll(params)
    const books = await query.getMany();
    if (books.length === 0) throw new NotFoundException("There are not books availables")
    return books;
  }

  validateParamsForFindAll(params: FindAllBooksParamsDto): SelectQueryBuilder<Book> {
    const query = this.bookRepository.createQueryBuilder('book')
    if (params.author) {
      query.where('book.author = :author', { author: params.author });
    }

    if(params.genre) {
      query.andWhere('book.genre = :genre', { genre: params.genre });
    }

    if (params.publicationDate) {
      query.andWhere('book.publicationDate = :publicationDate', { publicationDate: params.publicationDate })
    }

    return query
  }
}
