import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AlumnosModule,
    AlumnosComponent,
    AppComponent
  ]
})
export class SidebarModule { }
