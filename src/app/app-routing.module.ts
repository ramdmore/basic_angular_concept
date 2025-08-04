import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategariesComponent } from './categaries/categaries.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { EditComponent } from './edit/edit.component';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { ParentComponent } from './parent/parent.component';
import { HandleDataComponent } from './handle-data/handle-data.component';
import { DetailInfoComponent } from './handle-data/detail-info/detail-info.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DebounceComponent } from './debounce/debounce.component';
import { MyTableComponent } from './reusableComp/my-table/my-table.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { NewCompComponent } from './new-comp/new-comp.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent,
    canActivate: [AuthGuardService] ,
    // canActivateChild: [AuthGuardService],
    children:[
      { path: 'users/:id/:name', component: UsersComponent},
      { path: 'users/:id/:edit', component: EditComponent, canDeactivate:[DeactivateGuardService]},
    ]
  },

  { path: 'categaries', component: CategariesComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'data', component: HandleDataComponent},
  { path: 'detailInfo', component: DetailInfoComponent},
  { path: 'databinding', component: DataBindingComponent},
  { path: 'reactiveform', component: ReactiveFormComponent},
  { path: 'debounce', component: DebounceComponent},
  { path: 'reusetable', component: MyTableComponent},
  { path: 'apidata', component: ApiDataComponent},
  { path: 'newComp', component: NewCompComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
