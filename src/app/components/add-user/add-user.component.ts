import { AbstractControl, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"]
})
export class AddUserComponent implements OnInit {
  public name: AbstractControl;
  constructor() {}

  ngOnInit() {
    // Form control name
    // Add validation for required and minlength as 4
    this.name = new FormControl("");
  }

  /**
   * This function will set value "John" in the input field on button click in html
   */
  setValueInName(): void {
    // Make your changes here
  }
}
