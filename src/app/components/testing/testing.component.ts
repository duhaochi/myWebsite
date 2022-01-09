import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
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

}
