import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { CommentsModule } from './comments/comments.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './middleware/auth.middleware';


@Module({
  imports: [BoardsModule, CommentsModule, UserModule,
    ConfigModule.forRoot({
      envFilePath: `/src/config/env/.env`,  
      isGlobal: true, // 전체적으로 사용하기 위해  
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      // .exclude({ path: 'user/create_user', method: RequestMethod.POST }) // 유저 생성
      // .exclude({ path: 'user/user_all', method: RequestMethod.GET }) // 유저 전체 조회
      .exclude(
        'user/create_user',
        'user/user_all'
      )
      .forRoutes('user'); // 2.유저 컨트롤러 경로 등록 -> 위 1번과 동일
  } 
}
