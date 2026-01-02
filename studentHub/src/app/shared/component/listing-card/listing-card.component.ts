import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Listing } from '../../models/listing.model';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent {
  // @Input() title = '';
  // @Input() type = '';
  @Input() price = 0;
  // @Input() status = '';
 @Input() showActions = false;

  @Input () listing!:Listing;
  @Input() showCase=false;

  @Output()edit=new EventEmitter<number>()
  @Output()toggle=new EventEmitter<Listing>()
  onEdit(){
    this.edit.emit(this.listing.id)
  }
  onToggle(){
    this.toggle.emit(this.listing)
    }
}
