import { Component } from '@angular/core';

@Component({
  selector: 'menu-pane',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  options:string[] = ["al","be","ce"];
}
