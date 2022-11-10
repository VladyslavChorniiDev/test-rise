import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPopupComponent } from './verify-popup.component';

describe('VerifyPopupComponent', () => {
  let component: VerifyPopupComponent;
  let fixture: ComponentFixture<VerifyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
