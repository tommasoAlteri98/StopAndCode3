import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { FotoListComponent } from './foto-list/foto-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'albums', component: AlbumListComponent},
  {path: '', component: HomeComponent},
  {path: 'albums/:id', component: FotoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
