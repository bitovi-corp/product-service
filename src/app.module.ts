import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { AuthModule } from '@sample-app/nestjs-mock-auth';

@Module({
  imports: [AuthModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
