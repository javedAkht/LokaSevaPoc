import { DataTypes, Model, Sequelize } from "sequelize";
import { IworkingHistory } from "../interfaces/workingHistory";

export function workingHistoryModel(sequelize: Sequelize) {
    const WorkingHistory = sequelize.define<Model<IworkingHistory>>(
        "working_history",
        {
            Id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            Employee_ID_Number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            Company_Name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Employer_Name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Company_Employer_Address: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Company_Employer_Cellular_Phone: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Company_Employer_Office_Phone: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Previous_Qualification: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Previous_Experience: {
                type: DataTypes.STRING,
                allowNull: true
            },
            p_Start_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            p_Start_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            p_Start_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            p_End_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            p_End_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            p_End_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

        }, {
        tableName: "working_history"
    }

    );



    return WorkingHistory;
}
