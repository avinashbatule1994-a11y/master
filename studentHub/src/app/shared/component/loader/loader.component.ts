import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader" *ngIf="loading$ | async">
      Loading...
    </div>
  `
})
export class LoaderComponent {
  loading$ = this.loader.loading$;

  constructor(private loader: LoaderService) {}
}
