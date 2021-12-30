import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthUtilsComponent } from './input-auth-utils.component';

describe('InputAuthUtilsComponent', () => {
  let component: InputAuthUtilsComponent;
  let fixture: ComponentFixture<InputAuthUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuthUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAuthUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
