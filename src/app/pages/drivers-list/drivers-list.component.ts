import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DriversList} from './drivers-list.interface';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {
  data: DriversList[];

  displayedColumns = ['نام', 'ایمیل', 'شرکت', 'آدرس' , 'تلفن'];
  dataSource: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data.list;
    this.dataSource = this.data;
  }
}
