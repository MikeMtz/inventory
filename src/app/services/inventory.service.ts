import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Inventory } from "../interfaces/inventory";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url = environment.api;

  constructor( private http: HttpClient ) { }

  public getInventory() {
    return this.http.get(this.url + 'inventory');
  }

  public addInventory(data: Inventory): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post<Inventory>(this.url + 'inventory', JSON.stringify(data), {'headers': headers});
  }
}
