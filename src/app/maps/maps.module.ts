import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsLayoutPage } from './layout/mapsLayout/mapsLayout.page';
import { SideMenuComponent } from "./components/sideMenu/sideMenu.component";



@NgModule({
    declarations: [
      MapsLayoutPage
    ],
    imports: [
        CommonModule,
        MapsRoutingModule,
        SideMenuComponent
    ]
})
export class MapsModule { }
