import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { FindAllBooksParamsDto } from './dto/find-all-books-params.dto';
import { UpdateBookDto } from './dto/update-book.dto';

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

  @Get(':id')
  findOneBookById(@Param('id') id: number): Promise<Book> {
    return this.booksService.findOneBookById(id);
  }

  @Patch(':id') 
    updateBookById(@Param('id') id: number, @Body() updateBookData: UpdateBookDto): Promise<Book> {
      return this.booksService.updateBookById(id, updateBookData);
    }

  @Delete(':id')
  removeBookById(@Param('id') id: number): Promise<string> {
    return this.booksService.removeBookById(id);
  }
}
