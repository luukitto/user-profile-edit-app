import { Routes } from '@angular/router';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';

export const routes: Routes = [
  { path: 'edit-profile', component: UserProfileEditComponent },
  { path: '', redirectTo: 'edit-profile', pathMatch: 'full' },
];
