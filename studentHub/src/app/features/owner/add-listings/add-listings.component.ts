import { Component } from '@angular/core';

@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.scss']
})
export class AddListingsComponent {

  listing:any={
    type:"mess",
    name:"kolahpuri thaska",
    city:"pune",
    area:"narayan peth, patramarutichauk",
    status:'active'
  }
  save(){
    console.log("saved listing data",this.listing)
    alert('saveed data successfully ')
  }
}
