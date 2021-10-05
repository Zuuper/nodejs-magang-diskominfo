import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraPengajuanComponent } from './cara-pengajuan.component';

describe('CaraPengajuanComponent', () => {
  let component: CaraPengajuanComponent;
  let fixture: ComponentFixture<CaraPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaraPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
