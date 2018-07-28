module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define('Burger', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false
    });

    return Burger;
};