var Database = require('../config/database');
var Mongoose = Database.Mongoose;
var Schema = Mongoose.Schema;

var <%= humanizedSingularName %>Schema = new Schema({
});

var <%= humanizedSingularName %> = Mongoose.model('<%= humanizedSingularName %>', <%= humanizedSingularName %>Schema);