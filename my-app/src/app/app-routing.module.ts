import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotesComponent} from './notes/notes.component'

import { NotesListComponent} from './notes-list/notes-list.component';
// import { SharedDataService } from './shared-data.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'notes', component: NotesComponent},
<<<<<<< HEAD
  { path: 'notes-list', component: NotesListComponent},
=======
>>>>>>> c710ad009a6d5cabbffd11fba32a18a50fc2a1e8
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
