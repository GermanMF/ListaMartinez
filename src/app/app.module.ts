import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TourcardsComponent } from './tourcards/tourcards.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CardComponent } from './card/card.component';
import { AlumnosComponent } from "./alumnos/alumnos.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        TourcardsComponent,
        WrapperComponent,
        CardComponent,
        AlumnosComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
    ]
})
export class AppModule { }
