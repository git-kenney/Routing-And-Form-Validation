import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CategoryMenuComponent } from './market/category-menu/category-menu.component';
import { CategoryMenuItemComponent } from './market/category-menu-item/category-menu-item.component';
import { ProductsPageComponent } from './market/products-page/products-page.component';
import { RegisterPageComponent } from './modules/core/register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryMenuComponent,
    CategoryMenuItemComponent,
    ProductsPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
