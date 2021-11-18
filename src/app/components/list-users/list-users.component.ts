import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"]
})
export class ListUsersComponent implements OnInit {
  public usersList: any;

  constructor() {}

  ngOnInit() {
    // Get the data returned from the fetchService.fetch() into the variable usersList
    // This will be used to show the list of users in the HTML
    // Make your changes here
  }
}
