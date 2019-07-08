import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-developer',
  templateUrl: './software-developer.component.html',
  styleUrls: ['./software-developer.component.css']
})
export class SoftwareDeveloperComponent implements OnInit {
  softwareTitle:String="Updated Software";
  constructor() { }

  ngOnInit() {
  }

}
