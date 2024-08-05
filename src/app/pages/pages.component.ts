import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  imports:[SharedModule,RouterOutlet],
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent {

}
