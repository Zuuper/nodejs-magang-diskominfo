import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUtilsComponent } from './input-utils.component';

describe('InputUtilsComponent', () => {
  let component: InputUtilsComponent;
  let fixture: ComponentFixture<InputUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
