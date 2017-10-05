import { Component } from '@angular/core';
import {AngularFireDatabase, } from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alek';
  Hero:hero = {
    skill: 1,
    name: 'Windstorm'
  };
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {

    this.items = db.list('items').valueChanges();
    console.log(this.items);
  }
}
export class hero {
  name:string;
  skill:number;
}
