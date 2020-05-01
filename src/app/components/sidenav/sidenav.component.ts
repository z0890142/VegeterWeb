import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
// import {ComponentDataService} from '../../services/component-data.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() menuClick = new EventEmitter();

  
  constructor(
    // private componentDataService:ComponentDataService
  ) { }

  ngOnInit(): void {
  }
  menu_click() {
    this.menuClick.emit(null);
  }

  

  
}
