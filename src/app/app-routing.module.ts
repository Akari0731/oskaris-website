import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { JapaneseComponent } from './pages/japanese/japanese.component';
import { VideoComponent } from './pages/video/video.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work/:id', component: VideoComponent },
  { path: 'info', component: InfoComponent },
  { path: 'japanese', component: JapaneseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
