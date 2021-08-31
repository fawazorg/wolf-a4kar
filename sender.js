const { bot } = require("./bot");
const { random } = require("./helper/azkar");
const { rooms } = require("./helper/rooms");
const sendA4kar = async () => {
  // جلب الرومات المفعلة فقط
  let ActiveRooms = rooms.filter((x) => x.status === true);
  //if(ActiveRooms.length) return "not"
  // دوران على كل الرومات المفعلة و ارسال رسالة الاذكار
  ActiveRooms.forEach(async (room) => {
    console.log("Sending to : " + room.id);
    // ارسال رسالة اذكار عشوائية
    await bot.Messages.SendMessage(room.id, true, "/me " + random(), "text/plain");
  });
};

setInterval(async () => {
  await sendA4kar();
}, 20000); // عدد الثواني لتكرار دالة ارسال الاذكار
