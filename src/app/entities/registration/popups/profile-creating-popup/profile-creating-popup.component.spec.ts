import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCreatingPopupComponent } from './profile-creating-popup.component';

describe('ProfileCreatingPopupComponent', () => {
  let component: ProfileCreatingPopupComponent;
  let fixture: ComponentFixture<ProfileCreatingPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCreatingPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCreatingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
