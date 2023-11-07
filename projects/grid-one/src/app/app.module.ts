import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { GRID_ROUTES } from './app.routes';
import {GridComponent} from './grid/grid.component';

import 'ag-grid-enterprise';
import {LicenseManager} from 'ag-grid-enterprise';

LicenseManager.setLicenseKey('<your license key>');

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
