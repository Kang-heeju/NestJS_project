import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Board } from "src/boards/entities/boards.entity"

export const typeORMConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "7175",
    database: "nestjs",
    entities: [Board],
    synchronize: false, //false 권장!!
  }