const Help = require("./help");
const Active = require("./active");
const Deactive = require("./deactive");
const Commands = [...Help.Commands, ...Active.Commands, ...Deactive.Commands];
const Translation = [...Help.Translation, ...Active.Translation, ...Deactive.Translation];
module.exports = {
  Commands,
  Translation,
};
