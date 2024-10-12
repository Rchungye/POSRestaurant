import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VentasModule } from './ventas/ventas.module';
import { CuentasModule } from './cuentas/cuentas.module';


@Module({
  imports: [ProductosModule, UsuariosModule, VentasModule, CuentasModule, ],
})
export class AppModule {}
