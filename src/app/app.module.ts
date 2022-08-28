import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActivePageComponent } from './components/header/active-page/active-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MusicButtonComponent } from './components/music-button/music-button.component';
import { SectionComponent } from './components/section/section.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoContactComponent } from './pages/info/info-contact/info-contact.component';
import { InfoMainComponent } from './pages/info/info-main/info-main.component';
import { InfoComponent } from './pages/info/info.component';
import { VideoDescriptionComponent } from './pages/video/description/video-description.component';
import { VideoComponent } from './pages/video/video.component';
import { CenteredItemDirective } from './shared/directives/centered-item.directive';
import { SafePipe } from './shared/pipes/safe.pipe';
import { TranslationPipe } from './shared/pipes/translation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    HeaderComponent,
    MusicButtonComponent,
    SectionComponent,
    FooterComponent,
    VideoComponent,
    InfoComponent,
    ActivePageComponent,
    VideoDescriptionComponent,
    InfoContactComponent,
    InfoMainComponent,
    SafePipe,
    TranslationPipe,
    CenteredItemDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
