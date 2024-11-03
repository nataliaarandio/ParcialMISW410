/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject, ComponentFixture } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeComponent } from './cafe.component';
import { DebugElement } from '@angular/core';
import { Cafe } from './cafe';
import { faker } from '@faker-js/faker';
import { generate, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CafeModule } from './cafe.module';

describe('Service: Cafe', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;
  let compiled: HTMLElement;
  let cafeServiceSpy: jasmine.SpyObj<CafeService>;

  beforeEach(waitForAsync(() => {
      const spy = jasmine.createSpyObj('CafeService', ['getCafeList']);
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [ CafeComponent ],
        providers: [{ provide: CafeService, useValue: spy }]
      })
      .compileComponents();
      cafeServiceSpy = TestBed.inject(CafeService) as jasmine.SpyObj<CafeService>;
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CafeComponent);
      component = fixture.componentInstance;
  
      let cafes = Array.from({ length: 3 }, () => ({
        id: faker.string.alphanumeric(15),
        nombre: faker.lorem.sentences(2),
        tipo: faker.lorem.sentences(1),
        region:  faker.location.country(),
        sabor: faker.lorem.sentence(),
        altura: faker.number.int({ min: 1800, max: 4000 }),
        imagen:  faker.image.url(),
    }));

      cafeServiceSpy.getCafeList.and.returnValue(of(cafes));
      component.ngOnInit();
      fixture.detectChanges();
      compiled = fixture.nativeElement as HTMLElement;

  
    });

    it('should 4 columns ', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelectorAll('thead th').length).toBe(4);
    });

    it('should 4 table  tr', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelectorAll('.tr').length).toBe(3);
    });
});
