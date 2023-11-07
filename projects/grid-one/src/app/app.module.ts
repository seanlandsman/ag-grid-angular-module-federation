import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { RouterModule } from '@angular/router';
import { GRID_ROUTES } from './app.routes';
import {GridComponent} from './grid/grid.component';

import {AllModules, ModuleRegistry } from '@ag-grid-enterprise/all-modules';
import {LicenseManager} from '@ag-grid-enterprise/all-modules';

ModuleRegistry.registerModules(AllModules);

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
