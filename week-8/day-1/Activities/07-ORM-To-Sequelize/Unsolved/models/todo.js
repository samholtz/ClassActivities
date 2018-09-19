module.exports = function (sequelize, DataTypes) {

    var Todo = sequelize.define("Todo", {
        text: Datatypes.STRING,
        complete: Datatypes.BOOLEAN
    });
}


Todo.sync();
// need to fix this file