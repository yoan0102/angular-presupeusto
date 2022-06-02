import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto:string
  cantidad:number
  formularioIncorrecto:boolean
  textIncorrecto:string

  constructor(private preupuestoService: PresupuestoService) {
    this.nombreGasto = ''
    this.cantidad = 0
    this.formularioIncorrecto = false
    this.textIncorrecto = ''
   }

  ngOnInit(): void {
  }
  agregarGasto(){

    if(this.cantidad > this.preupuestoService.restante){
      this.formularioIncorrecto = true
      this.textIncorrecto = 'Cantidad ingresada exede al restante'
      return
    }

    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true
      this.textIncorrecto = `Nombre gasto o cantidad incorrecta`
    }else {

      //TODO: creamos objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      //TODO: Enviamos el objeto a los subcriptoresvia subjet
      this.preupuestoService.agregarGasto(GASTO)


      this.formularioIncorrecto = false
      this.nombreGasto = ''
      this.cantidad = 0
    }
  }

}

