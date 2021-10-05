import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkunUserComponent } from './akun-user.component';

describe('AkunUserComponent', () => {
  let component: AkunUserComponent;
  let fixture: ComponentFixture<AkunUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkunUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkunUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
