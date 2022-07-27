'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const StoreSchema = new Schema({
    name: String,
    description: String,
    address: String,
  });

  return mongoose.model('Store', StoreSchema);
};
