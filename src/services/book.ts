import { Ibook } from "../interfaces/book";
import Models, { sequelize } from "../models";

export default class BookService {
    static async add(book: Ibook) {
        const transaction = await sequelize.transaction();
        const result = await Models("book").create(book, { transaction });
        await transaction.commit();
        return !!result;
    }
}