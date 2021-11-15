import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPengajuanComponent } from './detail-pengajuan.component';

describe('DetailPengajuanComponent', () => {
  let component: DetailPengajuanComponent;
  let fixture: ComponentFixture<DetailPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
