import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FetchService {
  constructor(private http: HttpClient) {}

  /**
   * This function will fetch  and return the users List from the API URL: https://jsonplaceholder.typicode.com/users
   */
  fetch() {
    // Make your changes here
  }
}
