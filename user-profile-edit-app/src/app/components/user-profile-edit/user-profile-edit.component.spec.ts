import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { UserProfileEditComponent } from './user-profile-edit.component';
import { of } from 'rxjs';
import {UserProfileService} from "../../services/user-profile.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('UserProfileEditComponent', () => {
  let component: UserProfileEditComponent;
  let fixture: ComponentFixture<UserProfileEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UserProfileEditComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: UserProfileService,
          useValue: {
            getUserProfile: () => of({}),
            updateUserProfile: () => of({ success: true })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls', () => {
    expect(component.profileForm.contains('firstName')).toBeTruthy();
    expect(component.profileForm.contains('lastName')).toBeTruthy();
    expect(component.profileForm.contains('email')).toBeTruthy();
  });

  it('should mark form as invalid if required fields are missing', () => {
    component.profileForm.setValue({
      firstName: '',
      lastName: '',
      email: 'invalid-email',
      phoneNumber: '',
      profilePicture: null
    });
    expect(component.profileForm.invalid).toBeTruthy();
  });

  it('should mark form as valid if all fields are correct', () => {
    component.profileForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      profilePicture: null
    });
    expect(component.profileForm.valid).toBeTruthy();
  });
});
