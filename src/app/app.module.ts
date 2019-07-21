import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { VisionComponent } from './vision/vision.component';
import { PrincipleComponent } from './principle/principle.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { PracticeComponent } from './practice/practice.component';


const appRoutes: Routes = [
  {path: 'home1', component: HomeComponent},
  {
    path: 'about', 
    component: AboutComponent,
    children: [
      {path:'', redirectTo:'vision', pathMatch:'full'},
      {path:'vision', component: VisionComponent},
      {path:'principle', component: PrincipleComponent}
    ]
  },
  {path: 'contact', component: ContactComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: 'practice', component: PracticeComponent},
  {path: '', redirectTo: '/home1', pathMatch: 'full'},
  {path: '**', redirectTo: '/notfound'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    NotfoundComponent,
    VisionComponent,
    PrincipleComponent,
    ContactModalComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //debugging purpose only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
