import { Component } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { ChannelService } from '../services/channel.service';
import { Book } from '../types/types';

// interface Book {
//   bookName: string;
//   src: string;
//   author: string;
//   amount: number;
// }
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  title = 'This is my first Angular APP';

  items: any[] = ['Banana', 'Apple', 'Mango'];

  isDisabled: boolean = false;
  isShowing: boolean = true;
  myName: string = '';
  book: Book[] = [];
  books: Book[] = [];

  constructor(
    private channel: ChannelService,
    private bookService: BooksService
  ) {}
  ngOnInit(): void {
    this.fc();
    this.sentDataToServices();
    this.books = this.bookService.getBooks();
  }

  fc() {
    return this.title;
  }
  sum() {
    return 30 + 30;
  }

  message() {
    return this.channel.display();
  }

  sentDataToServices() {
    this.channel.getDataFromComponent(this.title);
  }

  enableButton() {
    this.isDisabled = true;
  }
  disableButton() {
    this.isDisabled = false;
  }

  handleInput(event: any) {
    console.log(event.target.value);
    this.myName = event.target.value;
  }

  toogleShowBooks() {
    this.isShowing = !this.isShowing;
  }

  addToCart(book: Book) {
    console.log('Parent component', book);
  }
}
