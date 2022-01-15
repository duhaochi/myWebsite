import { Component, Input, OnInit } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ]),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class TestingComponent implements OnInit {

  isDisabled = true;
  names = ["Haochi Du"];
  constructor() { }

  ngOnInit(): void {
  }
  @Input() name  = ""

  isEmpty(){
    if (this.name === ""){
      return true
    }
    return false;
  }

  onClick(){
    this.names.push(this.name)
    this.name = ""
  }

  items : number[] = [];

  showItems() {
    this.items = [0,1,2,3,4];
  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
   }

}
