import { UpdateBookDto } from './dto/update-book.dto';
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

  async findOneBookById(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({where: {id}});
    if (!book) throw new NotFoundException("Book not found")
    return book;
  }

  async updateBookById(id: number, updateBookData:UpdateBookDto ): Promise<Book> {
    const bookFound = await this.findOneBookById(id);
    if (!bookFound) throw new NotFoundException("Book not found")
    const bookUpdated = Object.assign(bookFound, updateBookData)
    return this.bookRepository.save(bookUpdated);
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

    if (params.skip) {
      query.skip(params.skip)
    }  
    
    if (params.take) {
      query.take(params.take);
    }

    return query
  }
}
