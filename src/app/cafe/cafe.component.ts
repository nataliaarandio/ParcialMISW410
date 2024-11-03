import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  constructor(private cafeService: CafeService) { }
  cafes: Array<Cafe> = [];

  getCafeList() {
    this.cafeService.getCafeList().subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  ngOnInit() {
    this.getCafeList();
  }

}
