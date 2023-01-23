import { Component } from '@angular/core';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  constructor(private channel: ChannelService) {}
  ngOnInit(): void {
    this.fc();
    this.sentDataToServices();
  }
  title = 'This is my first Angular APP';

  items: any[] = ['Banana', 'Apple', 'Mango'];

  isDisabled: boolean = false;
  bookName = 'Clean Code';
  src =
    'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';
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
}
