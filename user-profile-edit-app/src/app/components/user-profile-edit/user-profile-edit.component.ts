import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {UserProfileService} from "../../services/user-profile.service";

interface UserProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string; // Optional field
  profilePicture?: File | null; // Optional field for the profile picture
}


@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class UserProfileEditComponent implements OnInit {
  profileForm!: FormGroup;
  profilePreviewUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('^[0-9]*$')],
      profilePicture: [null],
    });
    this.loadUserData();
  }

  loadUserData() {
    this.userProfileService.getUserProfile().subscribe(data => {
      console.log('Pre-populating form with:', data); // Debug log
      this.profileForm.patchValue(data);
    });
  }

  loading = false;
  onSubmit() {
    if (this.profileForm.valid) {
      this.loading = true;

      // Initialize updatedData with type UserProfileData
      const updatedData: UserProfileData = {
        firstName: this.profileForm.get('firstName')?.value,
        lastName: this.profileForm.get('lastName')?.value,
        email: this.profileForm.get('email')?.value,
        phoneNumber: this.profileForm.get('phoneNumber')?.value
      };

      // Include profile picture if available
      const profilePicture = this.profileForm.get('profilePicture')?.value;
      if (profilePicture) {
        updatedData.profilePicture = profilePicture; // Add profile picture to the data
      }

      console.log('Saving data:', updatedData); // Debugging log

      this.userProfileService.updateUserProfile(updatedData).subscribe(
        response => {
          this.loading = false;
          console.log('Profile updated successfully', response);
          alert('Profile updated successfully!');
        },
        error => {
          this.loading = false;
          console.error('Error updating profile', error);
          alert('Failed to update profile.');
        }
      );
    }
  }




  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.patchValue({ profilePicture: file });

      // Generate a preview URL for the image
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePreviewUrl = reader.result; // Set preview URL
      };
      reader.readAsDataURL(file);
    }
  }


  onCancel() {
    this.profileForm?.reset();
    this.profilePreviewUrl = null;
  }
}
