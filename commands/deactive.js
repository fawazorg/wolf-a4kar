const { Command, CommandContext } = require("cmd.wolf.js");
const { rooms } = require("../helper/rooms");
const Translation = [
  {
    key: "DEACTIVE",
    translations: {
      ar: "!اذكار تعطيل",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const Deactive = async (bot, context) => {
  // نبحث عن الروم في مصوفة الرومات و بحيث نقارن رقم الروم بالرقم الموجود بالمصفوفة
  let room = rooms.find((x) => x.id === context.Group.Id);
  // اذا لم نجد الروم نقوم بإنشاء عنصر جديد في المصفوفة و حالته معطلة
  if (!room) rooms.push({ id: context.Group.Id, status: false });
  // اذا وجدنا الروم نقوم بتعطيل حالته
  if (room) room.status = false;
  return context.Reply("تم التعطيل !");
};

/**
 *
 */
const Commands = [
  new Command("DEACTIVE", {
    method: (null, Deactive),
  }),
];

module.exports = {
  Commands,
  Translation,
};
