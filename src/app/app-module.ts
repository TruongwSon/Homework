import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEvent } from './Bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './Bai13/service-product-image-event-detail/service-product-image-event-detail';
import { ProductCatalog } from './Bai14/product-catalog/product-catalog';
import { CustomerGroup } from './Bai18/customer-group/customer-group';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    ProductCatalog,
    CustomerGroup,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
