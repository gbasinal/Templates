import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { ServicesComponentsComponent } from './services-components/services-components.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsComponentsComponent } from './projects-components/projects-components.component';
import { CultureComponent } from './culture/culture.component';
import { CultureComponentComponent } from './culture-component/culture-component.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TestimonialComponentComponent } from './testimonial/testimonial-component/testimonial-component.component';
import { ContactComponent } from './contact/contact.component';
import { LogosComponent } from './logos/logos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    BannerComponent,
    ServicesComponent,
    ServicesComponentsComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectsComponentsComponent,
    CultureComponent,
    CultureComponentComponent,
    TestimonialComponent,
    TestimonialComponentComponent,
    ContactComponent,
    LogosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
