import { Component } from '@angular/core';

@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.scss']
})
export class AddListingsComponent {
  listing = {
    type: 'mess',
    name: '',
    city: '',
    area: '',
    images: [] as string[]
  };

  onImageSelect(event: any) {
    const files = event.target.files;

    for (let file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        this.listing.images.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number) {
    this.listing.images.splice(index, 1);
  }

  saveListing() {
    console.log(this.listing);
    alert('Listing saved (UI only)');
  }
}

