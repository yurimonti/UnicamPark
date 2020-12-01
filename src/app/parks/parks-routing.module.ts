import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParksPage } from './parks.page';

const routes: Routes = [
  {
    path: '',
    component: ParksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParksPageRoutingModule {}
