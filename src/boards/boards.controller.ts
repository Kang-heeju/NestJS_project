import { Controller , Get} from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')

export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {}

    @Get()
    getHello(): string {
        return this.boardsService.ServiceHello();
    }
}
