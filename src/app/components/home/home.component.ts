import { Directive, Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query('.col', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('1s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}
