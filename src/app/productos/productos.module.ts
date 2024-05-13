import { NgModule } from "@angular/core";
import { ProductoComponent } from "./components/producto/producto.component";
import { ProductoCardComponent } from "./components/producto-card/producto-card.component";
import { ProductoListComponent } from "./components/producto-list/producto-list.component";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        ProductoComponent,
        ProductoCardComponent,
        ProductoListComponent,
    ],
    exports: [
        ProductoComponent,
        ProductoCardComponent,
        ProductoListComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ProductosModule { }