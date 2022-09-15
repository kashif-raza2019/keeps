import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer = "Keeps Application";
  data = " 2021 - 2022 Kashif Raza | Some rights reserved";
  constructor() { }

  ngOnInit(): void {
  }

}
