import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutPage } from './layout/mapsLayout/mapsLayout.page';
import { FullScrenPagePage } from './pages/fullScrenPage/fullScrenPage.page';
import { MarkersPagePage } from './pages/markersPage/markers.page';
import { ZoomRagePagePage } from './pages/zoomRagePage/zoomRange.page';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutPage,
    children: [

      {
        path: 'fullscren',
        loadComponent: ()=>import('./pages/fullScrenPage/fullScrenPage.page').then(m=>m.FullScrenPagePage)
      },
      {
        path: 'markers',
       component:MarkersPagePage
      },
      {
        path: 'zoom-range',
        component:ZoomRagePagePage
      },
      {
        path:'**',
        redirectTo:'fullscren'
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
