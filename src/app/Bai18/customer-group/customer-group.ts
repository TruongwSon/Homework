import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer-service';

@Component({
  selector: 'app-customer-group',
  standalone: false,
  templateUrl: './customer-group.html',
  styleUrl: './customer-group.css'
})
export class CustomerGroup {

  groupCustomers:any;

  errMessage:string = '';

  constructor(private service:CustomerService){

    this.service.getCustomers().subscribe({

      next:(data)=>{
        this.groupCustomers = data;
      },

      error:(err)=>{
        this.errMessage = err;
      }

    });

  }

}