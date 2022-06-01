import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
  { path: 'ingresarPresupuesto', component: IngresosComponent },
  { path: 'gastos', component: GastosComponent },
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
