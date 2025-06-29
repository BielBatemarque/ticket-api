import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'usuario',
      password: 'senha123',
      database: 'ticketeria',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
