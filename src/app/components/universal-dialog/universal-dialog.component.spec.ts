import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalDialogComponent } from './universal-dialog.component';

describe('UniversalDialogComponent', () => {
  let component: UniversalDialogComponent;
  let fixture: ComponentFixture<UniversalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
