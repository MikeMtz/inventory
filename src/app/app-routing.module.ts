import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryAddComponent } from "./pages/inventory/inventory-add/inventory-add.component";
import { InventoryListComponent } from "./pages/inventory/inventory-list/inventory-list.component";

const routes: Routes = [
  { path: 'list', component: InventoryListComponent },
  { path: 'add', component: InventoryAddComponent },
  { path: '**', component: InventoryAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
