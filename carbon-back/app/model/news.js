'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const NewsSchema = new Schema({
    title: String,
    author: String,
    content: String,
    imageUrl: String,
    tags: [ String ],
  }, { timestamps: true });

  return mongoose.model('News', NewsSchema);
};
