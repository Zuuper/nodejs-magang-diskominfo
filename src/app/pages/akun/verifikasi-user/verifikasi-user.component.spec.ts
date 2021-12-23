import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifikasiUserComponent } from './verifikasi-user.component';

describe('VerifikasiUserComponent', () => {
  let component: VerifikasiUserComponent;
  let fixture: ComponentFixture<VerifikasiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifikasiUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifikasiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
