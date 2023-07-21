import { Sequelize } from "sequelize";
import { bookModel } from "./book";
import { userModel } from "./user";
export function initModels(sequelize: Sequelize) {
    const user = userModel(sequelize);
    const book = bookModel(sequelize);

    return {
        user,
        book
    }
}