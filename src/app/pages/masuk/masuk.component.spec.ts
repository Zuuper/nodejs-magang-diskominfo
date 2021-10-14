import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasukComponent } from './masuk.component';

describe('MasukComponent', () => {
  let component: MasukComponent;
  let fixture: ComponentFixture<MasukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
