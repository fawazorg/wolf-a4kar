const { Command, CommandContext } = require("cmd.wolf.js");
const { rooms } = require("../helper/rooms");
const Translation = [
  {
    key: "ACTIVE",
    translations: {
      ar: "!اذكار تفعيل",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const Active = async (bot, context) => {
  // نبحث عن الروم الذي رقمه يساوي الرقم رسالة الامر
  let room = rooms.find((x) => x.id === context.Group.Id);
  // اذا ما وجدنا الروم ننشئ عنصر يحتوي على رقم الروم + حالة الروم
  if (!room) rooms.push({ id: context.Group.Id, status: true });
  // اذا وجدنا الروم نخلي حالته مفعله
  if (room) room.status = true;
  return context.Reply("تم التفعيل !");
};

/**
 *
 */
const Commands = [
  new Command("ACTIVE", {
    method: (null, Active),
  }),
];

module.exports = {
  Commands,
  Translation,
};
