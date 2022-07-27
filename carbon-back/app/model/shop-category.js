'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ShopCategorySchema = new Schema({
    name: String,
  });

  return mongoose.model('ShopCategory', ShopCategorySchema);
};
