import { Component, OnInit } from '@angular/core';
import {Inventory} from "../../../interfaces/inventory";
import {InventoryService} from "../../../services/inventory.service";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventory: Inventory[];
  total_cost: number;
  total_iva: number;
  total_price: number;

  constructor( public inventoryService: InventoryService ) {
  }

  ngOnInit() {
    this.inventoryService.getInventory().subscribe( data => {
      if(data['success']) {
        let total_cost = 0;
        let total_iva = 0;
        let total_price = 0;
        this.inventory = data['data']
        this.inventory.forEach( (value) => {
          total_cost += value['cost'];
          total_iva += value['iva'];
          total_price += value['price'];
        })

        this.total_cost = total_cost;
        this.total_iva = total_iva;
        this.total_price = total_price;

      }
    })
  }
}
