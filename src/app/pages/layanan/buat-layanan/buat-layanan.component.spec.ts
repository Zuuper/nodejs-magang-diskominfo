import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatLayananComponent } from './buat-layanan.component';

describe('BuatLayananComponent', () => {
  let component: BuatLayananComponent;
  let fixture: ComponentFixture<BuatLayananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuatLayananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatLayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
