const { Command, CommandContext } = require("cmd.wolf.js");

const Translation = [
  {
    key: "HELP",
    translations: {
      ar: "!اذكار مساعدة",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const Help = async (bot, context) => {
  // مصفوفة المساعدة
  let help = ["!اذكار تفعيل", "اذكار تعطيل"];
  // نجمع عناصر المصفوفة و نضع بينهما سطر جديد
  return context.Reply(help.join("\n"));
};

/**
 *
 */
const Commands = [
  new Command("HELP", {
    method: (null, Help),
  }),
];

module.exports = {
  Commands,
  Translation,
};
