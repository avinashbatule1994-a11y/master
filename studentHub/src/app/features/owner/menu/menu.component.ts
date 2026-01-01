import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuEnabled:boolean=true;
  todayMenu = {
    date:"",
    breakfast: '',
    lunch: '',
    dinner: '',
  };

  saveMenu() {
    console.log(this.todayMenu);
    alert('Menu saved (dummy)');
  }
  toggleMenu(){
this.menuEnabled=!this.menuEnabled
  }
}

