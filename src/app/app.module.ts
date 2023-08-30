import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicGridComponent } from './components/basic-grid/basic-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicGridComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }