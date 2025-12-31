import { Component } from "@angular/core";

@Component({
    selector:'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls:['./favourites.component.scss'],
})
export class FavouritesComponent {
  favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  remove(index: number) {
    this.favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
