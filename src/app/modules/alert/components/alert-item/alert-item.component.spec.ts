import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertItemComponent } from './alert-item.component';

describe('HeaderComponent', () => {
  let component: AlertItemComponent;
  let fixture: ComponentFixture<AlertItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
