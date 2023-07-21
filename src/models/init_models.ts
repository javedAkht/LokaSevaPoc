import { Sequelize } from "sequelize";
import { ContactInformationModel } from "./contactInformation";
import { holidayInformationModel } from "./holidayInformation";
import { salaryInformationModel } from "./salaryInformation";
import { timeInformationModel } from "./timeInformation";
import { userModel } from "./user";
import { workingHistoryModel } from "./workingHistory";
export function initModels(sequelize: Sequelize) {
    const user = userModel(sequelize);
    const workingHistory = workingHistoryModel(sequelize);
    const timeInformation = timeInformationModel(sequelize);
    const salaryInformation = salaryInformationModel(sequelize);
    const contactInformation = ContactInformationModel(sequelize);
    const holidayInformation = holidayInformationModel(sequelize);
    return {
        user,
        workingHistory,
        timeInformation,
        salaryInformation,
        contactInformation,
        holidayInformation
    }
}