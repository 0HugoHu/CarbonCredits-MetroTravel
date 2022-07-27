'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AdminSchema = new Schema({
    username: String,
    password: String,
    permissions: [ String ],
  });

  return mongoose.model('Admin', AdminSchema);
};
