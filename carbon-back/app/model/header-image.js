'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const HeaderImageSchema = new Schema({
    image: String,
    href: String,
  });

  return mongoose.model('HeaderImage', HeaderImageSchema);
};
