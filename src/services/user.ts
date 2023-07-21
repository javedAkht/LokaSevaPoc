import { Iuser } from "../interfaces/user";
import Models, { sequelize } from "../models";

export default class UserService {
    static async add(user: Iuser) {
        const transaction = await sequelize.transaction();
        const result = await Models("user").create(user, { transaction });
        await transaction.commit();
        return !!result;
    }
}