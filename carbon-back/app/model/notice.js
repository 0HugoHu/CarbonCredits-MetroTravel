'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const NoticeSchema = new Schema({
    content: String,
  }, { timestamps: true });

  return mongoose.model('Notice', NoticeSchema);
};
