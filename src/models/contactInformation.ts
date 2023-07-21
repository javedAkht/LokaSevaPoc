import { DataTypes, Model, Sequelize } from "sequelize";
import { IContactInformation } from "../interfaces/contactInformation";

export function ContactInformationModel(sequelize: Sequelize) {
    const ContactInformation = sequelize.define<Model<IContactInformation>>(
        "contact_information",
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
            c_First_Name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            c_Middle_Name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            c_Last_Name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            c_Cellular_Phone: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            c_Home_Phone: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            c_City: {
                type: DataTypes.STRING,
                allowNull: true
            },
            c_Address: {
                type: DataTypes.STRING,
                allowNull: true
            },
        }, {
        tableName: "contact_information"
    }

    );



    return ContactInformation;
}
