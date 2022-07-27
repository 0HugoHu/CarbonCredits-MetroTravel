'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ShopSKUSchema = new Schema({
    name: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: 'ShopCategory',
    },
  });

  return mongoose.model('ShopSKU', ShopSKUSchema);
};
