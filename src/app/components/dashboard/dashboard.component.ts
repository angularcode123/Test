import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allOrders:any[]=[];
  dtOptions: DataTables.Settings = {};
  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.authService.getAllOrders().subscribe((res:any)=>{
      this.allOrders=res
      console.log(this.allOrders,'Allorders');
    })
  }

}
