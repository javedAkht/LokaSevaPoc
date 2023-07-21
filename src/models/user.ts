import { DataTypes, Model, Sequelize } from "sequelize";
import { Iuser } from "../interfaces/user";

export function userModel(sequelize: Sequelize) {
    const User = sequelize.define<Model<Iuser>>(
        "user",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userMob: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userAge: {
                type: DataTypes.INTEGER,
            },

        }, {
        tableName: "user"
    }

    );



    return User;
}
