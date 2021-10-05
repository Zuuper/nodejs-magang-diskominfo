import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftLayananComponent } from './draft-layanan.component';

describe('DraftLayananComponent', () => {
  let component: DraftLayananComponent;
  let fixture: ComponentFixture<DraftLayananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftLayananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftLayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
