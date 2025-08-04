import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Add this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategariesComponent } from './categaries/categaries.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { HandleDataComponent } from './handle-data/handle-data.component';
import { DetailInfoComponent } from './handle-data/detail-info/detail-info.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HighlightDirective } from './services/Shared/highlight.directive';
import { CapitalizePipe } from './services/Shared/capitalize.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DebounceComponent } from './debounce/debounce.component';
import { MyTableComponent } from './reusableComp/my-table/my-table.component';
import { ApiDataComponent } from './api-data/api-data.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { NewCompComponent } from './new-comp/new-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategariesComponent,
    UserComponent,
    EditComponent,
    ParentComponent,
    ChildComponent,
    HandleDataComponent,
    DetailInfoComponent,
    DataBindingComponent,
    HighlightDirective,
    CapitalizePipe,
    ReactiveFormComponent,
    DebounceComponent,
    MyTableComponent,
    ApiDataComponent,
    NewCompComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
