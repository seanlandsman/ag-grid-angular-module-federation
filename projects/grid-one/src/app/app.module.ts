import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GRID_ROUTES } from './app.routes';
import {GridComponent} from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';


// ModuleRegistry.registerModules(AllModules);

// LicenseManager.setLicenseKey('<your license key>');

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GRID_ROUTES),
    AgGridModule
  ],
  declarations: [
    GridComponent,
  ]
})
export class AppModule { }
