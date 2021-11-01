import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  token!:string;

  constructor(public local:LocalStorageService, private ps: ProductsService, private router:Router) {
    try {
      this.token = this.local.get('user').token
      this.ps.getAllProduct(this.token).subscribe(
        data => {
          this.products = data;
        },
        err => {
          this.router.navigate(['/signin']);
        }
      );
    } catch (error) {
      console.log(error);
      this.router.navigate(['/signin']);
    }
   }

  ngOnInit(): void {
  }

  signout(){
    this.local.clear();
    this.router.navigate(['/signin']);
  }

}
