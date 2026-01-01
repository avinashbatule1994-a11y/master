import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.scss']
})
export class AddListingsComponent {
  isEdit:boolean=false;
  listing = {
    type: 'mess',
    name: '',
    city: '',
    area: '',
    images: [] as string[]
  };
  dummyListings = [
    { id: 1, type: 'mess', name: 'Sai Mess', city: 'Pune', area: 'Hadapsar', images: [] },
    { id: 2, type: 'hostel', name: 'Shiv Hostel', city: 'Pune', area: 'Wakad', images: [] }
  ]
  constructor(private route:ActivatedRoute){
   const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isEdit=true;
         const found = this.dummyListings.find(
        item => item.id === Number(id)
      );
          if (found) {
        this.listing = { ...found }; // ✅ THIS LINE AUTO-FILLS FORM
      }
    }
  }
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
    if(this.isEdit){
      alert('listing updatd (ui only)')
    }
    console.log(this.listing);
    alert('Listing saved (UI only)');
  }
}

