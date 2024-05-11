import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    ServiceHello(): string {
        return "Hello this is return without decorator injectable!";
    }
}
