import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../app/shared/services/auth-guard.service';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
const routes: Routes = [{path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
