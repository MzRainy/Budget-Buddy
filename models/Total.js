const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Total extends Model {}

Total.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        budget_amt: {
            type: DataTypes.DECIMAL(10,2),
        },
        remainder_amt: {
            type: DataTypes.DECIMAL(10,2)
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'total'
    }
);

module.exports = Total;