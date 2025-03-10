import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "login", component: LoginComponent},
    {path: "welcome/:name", component: WelcomeComponent},
    {path:"todos", component: ListtodosComponent},
    {path:"logout", component: LogoutComponent},
    {path: "**", component:ErrorComponent}
];
