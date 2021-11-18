import { RouterModule, Routes } from "@angular/router";

import { ListUsersComponent } from "./components/list-users/list-users.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "view-users", component: ListUsersComponent }
  // Make your changes here to route to add-user component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
