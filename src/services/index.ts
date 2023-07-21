import { IContactInformation } from "../interfaces/contactInformation";
import { IHolidayInformation } from "../interfaces/holidayInformation";
import { ISalaryInformation } from "../interfaces/salaryInformation";
import { ITimeInformation } from "../interfaces/timeInformation";
import { Iuser } from "../interfaces/user";
import { IworkingHistory } from "../interfaces/workingHistory";
import Models, { sequelize } from "../models";

export default class IndexService {
    static async addUser(user: Iuser) {
        const transaction = await sequelize.transaction();
        const result = await Models("user").create(user, { transaction });
        await transaction.commit();
        return !!result;
    }
    static async updateUser(user: Iuser, Id: number) {
        const result = await Models("user").update(user, {
            where: {
                Employee_ID_Number: Id
            }
        });
        return !!result;
    }
    static async deleteUser(Id: number) {
        const result = await Models("user").destroy({
            where: {
                Employee_ID_Number: Id
            }
        });
        return !!result;
    }
    static async getAllUser() {
        const result = await Models("user").findAll();
        return result;
    }
    static async addContactInformation(user: IContactInformation) {
        const transaction = await sequelize.transaction();
        const userData = (await Models("user").findAll({
            where: {
                Employee_ID_Number: user.Employee_ID_Number,
            }
        })).map(v => v.toJSON());
        if (!userData) {
            throw new Error("some errors");
        }
        user.c_Address = userData[0].Address;
        user.c_Cellular_Phone = userData[0].Cellular_Phone;
        user.c_City = userData[0].City;
        user.c_First_Name = userData[0].First_Name;
        user.c_Home_Phone = userData[0].Home_Phone;
        user.c_Last_Name = userData[0].Last_Name;
        user.c_Middle_Name = userData[0].Middle_Name;
        const result = await Models("contactInformation").create(user, { transaction });
        await transaction.commit();
        return !!result;
    }
    static async updateContactInformation(user: IContactInformation, Id: number) {
        const result = await Models("contactInformation").update(user, {
            where: {
                Id
            }
        });
        return !!result;
    }
    static async deleteContactInformation(Id: number) {
        const result = await Models("contactInformation").destroy({
            where: {
                Id
            }
        });
        return !!result;
    }
    static async getAllContactInformation() {
        const result = await Models("contactInformation").findAll();
        return result;
    }

    static async addHolidayInformation(user: IHolidayInformation) {
        const transaction = await sequelize.transaction();
        const result = await Models("holidayInformation").create(user, { transaction });
        await transaction.commit();
        return !!result;
    }
    static async updateHolidayInformation(user: IHolidayInformation, Id: number) {
        const result = await Models("holidayInformation").update(user, {
            where: {
                Id
            }
        });
        return !!result;
    }
    static async deleteHolidayInformation(Id: number) {
        const result = await Models("holidayInformation").destroy({
            where: {
                Id
            }
        });
        return !!result;
    }
    static async getAllHolidayInformation() {
        const result = await Models("holidayInformation").findAll();
        return result;
    }

    static async addSalaryInformation(user: ISalaryInformation) {
        const transaction = await sequelize.transaction();


        const result = await Models("salaryInformation").create(user, { transaction });
        await transaction.commit();
        return !!result;
    }
    static async updateSalaryInformation(user: ISalaryInformation, Id: number) {
        const result = await Models("salaryInformation").update(user, {
            where: {
                Id
            }
        });
        return !!result;
    }
    static async deleteSalaryInformation(Id: number) {
        const result = await Models("salaryInformation").destroy({
            where: {
                Id
            }
        });
        return !!result;
    }
    static async getAllSalaryInformation() {
        const result = await Models("salaryInformation").findAll();
        return result;
    }

    static async addTimeInformation(user: ITimeInformation) {
        const transaction = await sequelize.transaction();

        const result = await Models("timeInformation").create(user, { transaction });
        await transaction.commit();
        return !!result;
    }
    static async updateTimeInformation(user: ITimeInformation, Id: number) {
        const result = await Models("timeInformation").update(user, {
            where: {
                Id
            }
        });
        return !!result;
    }
    static async deleteTimeInformation(Id: number) {
        const result = await Models("timeInformation").destroy({
            where: {
                Id
            }
        });
        return !!result;
    }
    static async getAllTimeInformation() {
        const result = await Models("timeInformation").findAll();
        return result;
    }

    static async addWorkingHistory(user: IworkingHistory) {
        const transaction = await sequelize.transaction();
        const result = await Models("workingHistory").create(user, { transaction });
        await transaction.commit();
        return !!result;
    }
    static async updateWorkingHistory(user: IworkingHistory, Id: number) {
        const result = await Models("workingHistory").update(user, {
            where: {
                Id
            }
        });
        return !!result;
    }
    static async deleteWorkingHistory(Id: number) {
        const result = await Models("workingHistory").destroy({
            where: {
                Id
            }
        });
        return !!result;
    }
    static async getAllWorkingHistory() {
        const result = await Models("workingHistory").findAll();
        return result;
    }
}