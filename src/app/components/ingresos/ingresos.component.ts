import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from './../../services/presupuesto.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  public cantidad:number
  public cantidadIncorrecta: boolean

  constructor(private presupuestoService: PresupuestoService, private router: Router) {
    this.cantidad = 0
    this.cantidadIncorrecta = false
  }

  ngOnInit(): void {
  }

  agregar(){
    if(this.cantidad > 0 ){
      this.cantidadIncorrecta = false
      this.presupuestoService.presupuesto = this.cantidad
      this.presupuestoService.restante = this.cantidad
      this.router.navigate(['/gastos'])

    }else {
      this.cantidadIncorrecta = true
    }
  }
}
