const { Client } = require("wolf.js");
const { CommandSystem } = require("cmd.wolf.js");
const { Commands, Translation } = require("./commands");
require("dotenv").config();

const bot = new Client();
module.exports = { bot };

bot.On.Security.LoginFailed = () => console.log("Login Failed");
bot.On.Security.LoginSuccess = (user) => {
  console.log(`Login Success: ${user.Nickname}`);
  // اذا تم تسجيل الدخول بنجاح نستدعي الملف الخاص بارسال رسائل الاذكار
  require("./sender");
};
const SetupCommand = new CommandSystem(bot);
SetupCommand.LoadTranslations(Translation);
SetupCommand.AddCommands(...Commands);
bot.Login(process.env.Email, process.env.Password);
