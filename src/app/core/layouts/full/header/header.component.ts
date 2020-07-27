import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemToggle: boolean = false;
  @ViewChild('menuRef', { static: true }) menuRef: MatMenuTrigger;
  constructor() { }

  ngOnInit(): void {
  }

  btnToggle(event: any) {
    //this.menuRef.openMenu();
    this.itemToggle = !this.itemToggle;
  }
}
