import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.scss']
})
export class BasicGridComponent {
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];
}
