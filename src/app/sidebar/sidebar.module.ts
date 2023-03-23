import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { AlumnosComponent } from '../alumnos/alumnos.component';

@NgModule({
  declarations: [
    AlumnosModule,
  ],
  imports: [
    CommonModule,
    AlumnosComponent
  ]
})
export class SidebarModule { }
