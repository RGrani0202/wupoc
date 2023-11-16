import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddReceiverComponent} from "./add-receiver/add-receiver.component";
import{MyReceiversComponent}from "./my-receivers/my-receivers.component";
import{UpdateReceiverComponent}from "./update-receiver/update-receiver.component";
import{LoginComponent}from"./login/login.component";
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"add-receiver", canActivate:[AuthGuard],
    component:AddReceiverComponent
  },
  {
    path:"my-receivers", canActivate:[AuthGuard],
    component:MyReceiversComponent
  },
  {
     path:"update-receiver/:id", canActivate:[AuthGuard],
     component:UpdateReceiverComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
