
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UserProfile {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    gender!: string

    @Column()
    avatarImagePath!: string

    @Column()
    syncronized!: boolean
}