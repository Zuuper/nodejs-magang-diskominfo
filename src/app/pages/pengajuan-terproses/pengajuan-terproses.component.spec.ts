import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengajuanTerprosesComponent } from './pengajuan-terproses.component';

describe('PengajuanTerprosesComponent', () => {
  let component: PengajuanTerprosesComponent;
  let fixture: ComponentFixture<PengajuanTerprosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengajuanTerprosesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengajuanTerprosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
