import { Component} from '@angular/core';
//servicio
import { ProductoService } from '../../services/producto.service';
import { ProductDTO } from '../../../shared/models/product.dto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent {

  products?: ProductDTO[] = [];
  constructor(private productoService: ProductoService) { };

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productoService.getProducts().toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  private async getProducts() {
    try {
      this.products = await this.productoService.getProducts().toPromise();
      console.log(this.products);
    } catch (error) {
      console.error(error);
    }
  }

}
