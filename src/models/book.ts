import { DataTypes, Model, Sequelize } from "sequelize"
import { Ibook } from "../interfaces/book";
export function bookModel(sequelize: Sequelize) {
    const Book = sequelize.define<Model<Ibook>>("book", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        bookName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookDesc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookPrice: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: "book"
    }
    )
    return Book;
}