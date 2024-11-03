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
  cafeOrigen= 0;
  cafeBlend = 0;

  getCafeList() {
    this.cafeService.getCafeList().subscribe(cafes => {
    this.cafes = cafes;
    this.getTypeCafes(); 
    });
  }
  
  getTypeCafes() {
    this.cafes.forEach(cafe => {
      if (cafe.tipo === 'Café de Origen') {
        this.cafeOrigen++;
      } else if (cafe.tipo === 'Blend') {
        this.cafeBlend++;
      }
    });
  }

  getTotalCantOrigen()
  {
    return this.cafeOrigen
  }

  getTotalCantBlend()
  {
    return this.cafeBlend
  }

  ngOnInit() {
    this.getCafeList();
  }

}
