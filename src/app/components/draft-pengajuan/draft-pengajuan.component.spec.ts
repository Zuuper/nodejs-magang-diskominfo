import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPengajuanComponent } from './draft-pengajuan.component';

describe('DraftPengajuanComponent', () => {
  let component: DraftPengajuanComponent;
  let fixture: ComponentFixture<DraftPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
