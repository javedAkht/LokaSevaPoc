import { DataTypes, Model, Sequelize } from "sequelize";
import { Iuser } from "../interfaces/user";

export function userModel(sequelize: Sequelize) {
    const User = sequelize.define<Model<Iuser>>(
        "user",
        {
            Employee_ID_Number: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            Personal_ID_Number: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            First_Name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Middle_Name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Last_Name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Day_of_Birth: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Month_of_Birth: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Year_of_Birth: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Cellular_Phone: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Home_Phone: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            City: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Address: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Postal_Code: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Qualification: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Current_Experience: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Start_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Start_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Start_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            End_Date_Day: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            End_Date_Month: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            End_Date_Year: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Type_of_Employee: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Gender: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Marital_Status: {
                type: DataTypes.STRING,
                allowNull: true
            }

        }, {
        tableName: "user"
    }

    );



    return User;
}
