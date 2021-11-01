import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { ProductComponent } from './components/product/product.component';
//กำหนเ path 
const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'products', component: ProductComponent},
  {path: '', redirectTo:'signin',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
