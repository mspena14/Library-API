import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { FindAllBooksParamsDto } from './dto/find-all-books-params.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<CreateBookDto> {
    return this.booksService.createBook(createBookDto);
  }

  @Get()
  findAllBooks(@Query() params: FindAllBooksParamsDto): Promise<Book[]> {
    return this.booksService.findAllBooks(params);
  }
}
