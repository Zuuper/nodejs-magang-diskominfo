import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkunSayaComponent } from './akun-saya.component';

describe('AkunSayaComponent', () => {
  let component: AkunSayaComponent;
  let fixture: ComponentFixture<AkunSayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkunSayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkunSayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
