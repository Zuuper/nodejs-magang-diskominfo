import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLayananComponent } from './detail-layanan.component';

describe('DetailLayananComponent', () => {
  let component: DetailLayananComponent;
  let fixture: ComponentFixture<DetailLayananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLayananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
