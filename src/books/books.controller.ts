import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<CreateBookDto> {
    return this.booksService.createBook(createBookDto);
  }

  @Get()
  findAllBooks(): Promise<Book[]> {
    return this.booksService.findAllBooks();
  }
}
