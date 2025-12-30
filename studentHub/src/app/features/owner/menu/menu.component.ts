import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  todayMenu: {
    breakfast: string;
    lunch: string;
    dinner: string;
  } = {
    breakfast: '',
    lunch: '',
    dinner: '',
  };

  saveMenu() {
    console.log(this.todayMenu);
    alert('Menu saved (dummy)');
  }
}

