import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserProfile } from "../models/user_profile"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [UserProfile],
    migrations: [],
    subscribers: [],
})
