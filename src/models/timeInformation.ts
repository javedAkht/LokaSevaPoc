import { DataTypes, Model, Sequelize } from "sequelize";
import { ITimeInformation } from "../interfaces/timeInformation";

export function timeInformationModel(sequelize: Sequelize) {
    const TimeInformation = sequelize.define<Model<ITimeInformation>>(
        "time_information",
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
            Wroked_Hours: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Off_Hours: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Days_off: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Over_Time: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Extra_Days: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            w_From_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            w_From_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            w_From_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            w_To_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            w_To_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            w_To_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

        }, {
        tableName: "time_information"
    }

    );



    return TimeInformation;
}
