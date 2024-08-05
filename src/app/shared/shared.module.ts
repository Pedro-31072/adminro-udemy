import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent, NotFoundComponent, SidebarComponent,],
  imports: [
    CommonModule
  ],
  exports: [BreadcrumbsComponent, HeaderComponent, NotFoundComponent, SidebarComponent,]
})
export class SharedModule { }
