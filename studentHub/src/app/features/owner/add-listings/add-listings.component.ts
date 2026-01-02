import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/shared/models/listing.model';
import { ListingService } from 'src/app/shared/services/listing.service';

@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.scss']
})
export class AddListingsComponent implements OnInit {
  isEdit:boolean=false;
  // listing = {
  //   type: 'mess',
  //   name: '',
  //   city: '',
  //   area: '',
  //   images: [] as string[]
  // };
    listing: Listing = {
    id: 0,
    name: '',
    type: 'mess',
    city: '',
    area: '',
    active: true,
    images: [] as string[]
  };
  // dummyListings = [
  //   { id: 1, type: 'mess', name: 'Sai Mess', city: 'Pune', area: 'Hadapsar', images: [] },
  //   { id: 2, type: 'hostel', name: 'Shiv Hostel', city: 'Pune', area: 'Wakad', images: [] }
  // ]
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:ListingService
  ){
  //  const id = this.route.snapshot.paramMap.get('id');
  //   if(id){
  //     this.isEdit=true;
  //        const found = this.dummyListings.find(
  //       item => item.id === Number(id)
  //     );
  //         if (found) {
  //       this.listing = { ...found }; // ✅ THIS LINE AUTO-FILLS FORM
  //     }
  //   }
  }
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get("id");
    if(id){
    const existing =this.service.getById(+id);
    if(existing){
      this.listing={
        ...existing,
        images:existing.images??[]
      };
      this.isEdit=true
    }
    }
  }
onImageSelect(event: any) {
  const files = event.target.files;

  if (!this.listing.images) {
    this.listing.images = [];
  }

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = () => {
      this.listing.images!.push(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
}


  removeImage(index: number) {
    this.listing.images!.splice(index, 1);
  }

  saveListing() {
if (this.isEdit){
  this.service.update(this.listing)
}else{
  this.service.add(this.listing)
}
this.router.navigate(['/owner/manage-listings'])
}
}

