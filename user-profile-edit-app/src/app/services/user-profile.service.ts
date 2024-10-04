import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userData: any;

  constructor() {
    // Initialize `userData` by checking `localStorage`
    const storedData = localStorage.getItem('userData');
    this.userData = storedData ? JSON.parse(storedData) : this.getDefaultUserData();

    // Save initial `userData` to `localStorage` if not present
    if (!storedData) {
      this.saveToLocalStorage(this.userData);
    }
  }

  // Default user data if none exists in `localStorage`
  private getDefaultUserData() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890'
    };
  }

  // Save data to `localStorage`
  private saveToLocalStorage(data: any) {
    localStorage.setItem('userData', JSON.stringify(data));
    console.log('Data saved to localStorage:', data); // Debug log
  }

  // Fetch user profile
  getUserProfile(): Observable<any> {
    console.log('Fetching user data from localStorage:', this.userData); // Debug log
    return of(this.userData).pipe(delay(500));
  }

  // Update user profile and save to `localStorage`
  updateUserProfile(data: any): Observable<any> {
    this.userData = { ...data };
    this.saveToLocalStorage(this.userData);
    return of({ success: true }).pipe(delay(1000));
  }
}
