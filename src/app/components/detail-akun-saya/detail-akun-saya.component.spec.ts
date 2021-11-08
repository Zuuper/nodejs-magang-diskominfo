import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAkunSayaComponent } from './detail-akun-saya.component';

describe('DetailAkunSayaComponent', () => {
  let component: DetailAkunSayaComponent;
  let fixture: ComponentFixture<DetailAkunSayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAkunSayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAkunSayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
