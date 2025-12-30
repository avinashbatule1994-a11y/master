import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent {
  @Input() title = '';
  @Input() type = '';
  @Input() price = 0;
  @Input() status = '';
}
