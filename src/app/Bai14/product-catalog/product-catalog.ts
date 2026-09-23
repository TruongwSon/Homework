import { Component } from '@angular/core';
import { CatalogService } from '../../services/catalog-service';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  styleUrl: './product-catalog.css',
  templateUrl: './product-catalog.html',
})
export class ProductCatalog {
   categories:any;

  constructor(service:CatalogService){
    this.categories = service.getCategories();
  }
}
