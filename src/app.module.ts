import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'ticketeria',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
