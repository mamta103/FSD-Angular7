import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-sector',
  templateUrl: './it-sector.component.html',
  styleUrls: ['./it-sector.component.css']
})
export class ItSectorComponent implements OnInit {
  itTitle:string= "Information-Sector";
  constructor() { }

  ngOnInit() {
  }

}
