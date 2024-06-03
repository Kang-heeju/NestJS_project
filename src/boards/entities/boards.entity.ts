import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Board {
    @PrimaryGeneratedColumn({name: 'article_id'}) //기본 키 역할, db에서의 이름은 article_id
    id: number;

    @Column()
    title: string;

    @Column()
    article_content: string;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @Column()
    article_writer: string;

    @Column()
    password: string;

    @Column()
    category: string;
}