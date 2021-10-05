import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivasiUserComponent } from './aktivasi-user.component';

describe('AktivasiUserComponent', () => {
  let component: AktivasiUserComponent;
  let fixture: ComponentFixture<AktivasiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktivasiUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktivasiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
