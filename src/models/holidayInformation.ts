import { DataTypes, Model, Sequelize } from "sequelize";
import { IHolidayInformation } from "../interfaces/holidayInformation";

export function holidayInformationModel(sequelize: Sequelize) {
    const HolidayInformation = sequelize.define<Model<IHolidayInformation>>(
        "holiday_information",
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
            Holiday: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            h_From_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            h_From_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            h_From_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            h_To_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            h_To_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            h_To_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        }, {
        tableName: "holiday_information"
    }

    );



    return HolidayInformation;
}
