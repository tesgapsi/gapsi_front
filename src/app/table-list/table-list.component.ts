import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {ProviderServiceService} from '../service/provider-service.service'
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [ProviderServiceService]
})
export class TableListComponent implements OnInit {
	providerList: any;
	 displayedColumns = ['id', 'name', 'description', 'rs', 'direction', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _providerService: ProviderServiceService, private _router: Router) { }

  ngOnInit() {
    this.refresh();
  	
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  agregar(event :Event) {

    event.preventDefault();
    this._router.navigate(["add-provider"]);
    
  }

  refresh() {
    this._providerService.getAllProvider(0,10).subscribe((res) => {
    this.providerList=res
    this.dataSource = new MatTableDataSource(res.content);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    });
  }


  delete(id:any){

    this._providerService.delete(id).subscribe((res) => {
    console.log("res:   ", res)
    this.refresh();
    });

  }

}


export interface ProviderData {
  id: string;
  name: string;
  rs: string;
  direction: string;
}