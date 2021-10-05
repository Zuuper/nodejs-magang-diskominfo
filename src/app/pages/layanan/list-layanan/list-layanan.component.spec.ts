import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLayananComponent } from './list-layanan.component';

describe('ListLayananComponent', () => {
  let component: ListLayananComponent;
  let fixture: ComponentFixture<ListLayananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLayananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
