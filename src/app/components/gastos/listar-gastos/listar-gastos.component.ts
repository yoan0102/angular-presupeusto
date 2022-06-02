import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  presupuesto: number
  restante:number
  listGastos: any[]= []

  constructor( private presupuestoService: PresupuestoService) {
    this.presupuesto = 0
    this.restante = 0
    this.subscription =  this.presupuestoService.getGastos().subscribe(data => {
      this.restante -= data.cantidad
      this.listGastos.push(data)
    })
  }

  ngOnInit(): void {
    this.presupuesto = this.presupuestoService.presupuesto
    this.restante = this.presupuestoService.restante
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

}
