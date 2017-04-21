import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { StudentsComponent } from "./students/students.component";
import { ProfileComponent } from "./profile/profile.component";
import { ErrorComponent } from "./error/error.component"
/*import { QueryComponent } from "./params/query.component";
import { FragmentComponent } from "./params/fragment.component";
import { PreserveComponent } from "./params/preserve.component";
import { ParentComponent } from "./parentchild/parent.component";
import { ChildComponent } from "./parentchild/child.component";
import { GuardsComponent } from "./guards/guards.component";*/

import { ProfileActivateGuard } from "./profile-activate.guard";
import { ProfileDeactivateGuard } from "./profile-deactivate.guard";

const MY_ROUTES: Routes = [
     { path: '', component: HomepageComponent },
     { path: 'students', component: StudentsComponent },
     { path: 'profile/:id', component: ProfileComponent, canActivate:[ProfileActivateGuard]},
     //{ path: 'profile', component: ProfileComponent, canActivate:[ProfileActivateGuard] },
     { path: 'error', component: ErrorComponent },
     
     // ** for all routes that we don't recognize, 
     // Routes served from top to bottom so this should always come last!
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
