import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PostPhotoComponent } from './pages/post-photo/post-photo.component';
import { Paths } from './helpers/app.constants';

const routes: Routes = [
  {
    path: Paths.HOME,
    component: HomeComponent,
   // canActivate: [LoggedInGuard]
  },
  {
    path: Paths.LOGIN,
    component: LoginComponent
  },
  {
    path: Paths.POST_PHOTO,
    component: PostPhotoComponent,
    //canActivate: [LoggedInGuard]
  },
  {
    path: 'secured',
    loadChildren: 'app/secured/secured.module#SecuredModule',
   // canActivate: [LoggedInGuard]
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
