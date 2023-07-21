import { DataTypes, Model, Sequelize } from "sequelize";
import { ISalaryInformation } from "../interfaces/salaryInformation";

export function salaryInformationModel(sequelize: Sequelize) {
    const SalaryInformation = sequelize.define<Model<ISalaryInformation>>(
        "salary_information",
        {
            Id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },

            Employee_ID_Number: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Monthly_Salary: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Monthly_Money_Currency: {
                type: DataTypes.STRING,
                allowNull: true
            },
            monthly_Taxes: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            monthly_Deductions: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            monthly_Insurances: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ms_From_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ms_From_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ms_From_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ms_To_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ms_To_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ms_To_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Weekly_Salary: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Weekly_Money_Currency: {
                type: DataTypes.STRING,
                allowNull: true
            },
            weekly_Taxes: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            weekly_Deductions: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            weekly_Insurances: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ws_From_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ws_From_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ws_From_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ws_To_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ws_To_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ws_To_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        }, {
        tableName: "salary_information"
    }

    );



    return SalaryInformation;
}
