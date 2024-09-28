import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { FindAllBooksParamsDto } from './dto/find-all-books-params.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiBadRequestResponse, ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @ApiOperation({ summary: 'Create a book' })
  @ApiBody({type: CreateBookDto})
  @ApiBadRequestResponse({description:"There was a error creating the book"})
  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<CreateBookDto> {
    return this.booksService.createBook(createBookDto);
  }

  @ApiOperation({ summary: 'Get all availables books' })
  @ApiQuery({ name: 'take', description: 'Define the amount of book you want to take',  required: false })
  @ApiQuery({ name:'skip', description: 'Define the amount of book you want to skip', required: false })
  @ApiNotFoundResponse({description:"There are not books availables"})
  @Get()
  findAllBooks(@Query() params: FindAllBooksParamsDto): Promise<Book[]> {
    return this.booksService.findAllBooks(params);
  }

  @ApiOperation({ summary: 'Get a book by its ID' })
  @ApiNotFoundResponse({description:"Book not found"})
  @Get(':id')
  findOneBookById(@Param('id') id: number): Promise<Book> {
    return this.booksService.findOneBookById(id);
  }

  @ApiOperation({ summary: 'Update a book by its ID' })
  @ApiBody({type: UpdateBookDto})
  @ApiNotFoundResponse({description:"Book not found"})
  @Patch(':id') 
    updateBookById(@Param('id') id: number, @Body() updateBookData: UpdateBookDto): Promise<Book> {
      return this.booksService.updateBookById(id, updateBookData);
    }

  @ApiOperation({ summary: 'Get a book by its ID' })
  @ApiOkResponse({description:"Book deleted successfully"})
  @ApiNotFoundResponse({description:"Book not found"})
  @Delete(':id')
  removeBookById(@Param('id') id: number): Promise<string> {
    return this.booksService.removeBookById(id);
  }
}
