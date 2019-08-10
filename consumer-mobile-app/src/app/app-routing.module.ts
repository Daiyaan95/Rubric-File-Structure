import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule' },
  { path: 'trips', loadChildren: './trips/trips.module#TripsPageModule' },
  { path: 'properties', loadChildren: './properties/properties.module#PropertiesPageModule' },
  { path: 'prop-details', loadChildren: './prop-details/prop-details.module#PropDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
