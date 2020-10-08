import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Inventory } from "../../../interfaces/inventory";
import {InventoryService} from "../../../services/inventory.service";

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css']
})
export class InventoryAddComponent {

  inventory: Inventory = { };
  submitted = false;
  inventoryFormGroup: FormGroup;

  constructor( private toastr: ToastrService,
               protected _formBuilder: FormBuilder,
               public inventoryService: InventoryService
  ) {
    this.inventoryFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      iva: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSave() {
    this.submitted = true;

    if (this.inventoryFormGroup.invalid) {
      this.showError('Debes ingresar todos los valores requeridos en el formulario.');
      return;
    }

    if(this.inventory.cost === 0 || this.inventory.price === 0) {
      this.showError('Los campos "Costo" y "Precio" deben ser mayores a cero');
      return;
    }

    this.inventoryService.addInventory(this.inventory).subscribe( resp => {
      if(resp['success']) {
        this.showSuccess();
      }
    })
  }

  showSuccess() {
    this.toastr.success('Información registrada', 'Bien hecho');
    this.inventory = { };
    this.submitted = false;
  }

  showError( message: string ) {
    this.toastr.error(message, 'Error');
    this.submitted = false;
  }

  calculatePrice() {
    this.inventory.price = this.inventory.cost * (1.16);
    this.inventory.iva = this.inventory.cost * 0.16;
  }
  calculateCost() {
    this.inventory.cost = this.inventory.price / (1.16);
    this.inventory.iva = this.inventory.cost * 0.16;
  }

}
