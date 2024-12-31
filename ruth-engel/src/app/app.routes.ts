import { Routes } from '@angular/router';
import { TeacherFormComponent } from '../components/teacher-form/teacher-form.component';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { ClassReactiveFormComponent } from '../components/class-reactive-form/class-reactive-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'student-list', component: StudentListComponent },
    { path: 'teacher-form', component: TeacherFormComponent },
    { path:'class-reactive-form',component:ClassReactiveFormComponent}

];
