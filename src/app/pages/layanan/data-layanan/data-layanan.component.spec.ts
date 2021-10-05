import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLayananComponent } from './data-layanan.component';

describe('DataLayananComponent', () => {
  let component: DataLayananComponent;
  let fixture: ComponentFixture<DataLayananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataLayananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
