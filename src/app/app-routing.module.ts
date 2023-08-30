import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicGridComponent } from './components/basic-grid/basic-grid.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "basic-grid", component: BasicGridComponent
  },
  {
    path: "", component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
