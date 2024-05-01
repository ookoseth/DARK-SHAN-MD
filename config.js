const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("254706610185,")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KUSHAN:5000@cluster0.zji09ho.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/kushansewmina1234/DARK-SHAN-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '9471234567'
global.devs = '94772108460';
global.website = 'https://github.com/kushansewmina1234/DARK-SHAN-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ee0f303f5da6d86d024e0.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'DARK-SHAN-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ANONYMOUS' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ?  DARKSHAN;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNzdmJuN0ZCSkdMNzlVUTMwQnloME5aVDVCa0pxbWRySkVmaU03RHVVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFM1RnV3ZkplNUJDcEkxamFvSENzbWRwNEV4QU1yV2VzM3RwV3FUbEdTdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRTV4aU9UQWFYNmY3TnQ0Z3hIampvQmZ6NHZLV0FUSm8wYm5xTXNQNldFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ejhwNlpLSW53bXN0dUFnVGtpWHVIdWJURS9wYVIyWURRNG41MkFlNURNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQNlRTM1l1ZzlCTVRRMC9jWlJqMmVJakc0V1dWRjc0TDdRelBuQ3R4VmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh0aldMMDcrcWNRVGNCRzBOcEt3cGZMTjUwRXNVUStLTUFlZnpESnF3eE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhDd0ZRK2ZhSVAzM0tzYXo3UUdNMEp1UU9TWGZFNmJUM0FGbVFVbmJIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmlBMEdta2FodWJvblpaVHA5SGpxSlViVEhud0VTNGJhN3p6SmxtNWR3WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Illsd3M5UVh6Q0NVQ1p1K1ZOVHJuOTBYRzJZc1Z6R25jM1BjTm1rRDdadzJjR21CNWNYSHBkSnBDMVdXbEFVbU8yMHkzZmlNcENqRU9tZXFuSXduY0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6ImdjMFY3bFduZzJSbWYxdzlnVWRyNVhaWUxSb2N4OThHUHFIVFpZZmxGVU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzA2NjEwMTg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk0NjQ0QjM3Nzk2Mzg0N0EzMUJFQ0Y5MjZERTVDRTdDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTQ1NzI0NjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwNjYxMDE4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2QTU0Q0JCQzcyOTdCRkE3MkMyMzUzMTdGMTM0MkFGNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE0NTcyNDY0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfaUlyQkl1bVJ0dU1HaVRkSTQxVVRBIiwicGhvbmVJZCI6IjVlN2QwNWM4LTUzNDEtNDliMi1iYWY2LTZiODY0NWFkMjM4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ZmtybHFmUDdrL0dmUWgvMkd5eDQwZmlhazQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzdXVi83aWhtMTZQQ05FZU1wNjRhWDlzWnZjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFEM01SRTM5IiwibWUiOnsiaWQiOiIyNTQ3MDY2MTAxODU6MjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDE0MDg3MTY0NzY0NTY6MjZAbGlkIiwibmFtZSI6IuKalO+4j/CfkqvwnZCA8J2Qp/CdkKjwnZCn8J2QsvCdkKbwnZCo8J2QrvCdkKzinKjimqHimpTvuI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pYdW1zOEhFS0daeWJFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJwZThJdVZjcDBMc1ovNU1BRUdiQXFiV1ZBRjdCNHRTRVVhc2hvWmZmbWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJSODZyWVdKMGYyakU4WUZuM0NFSTBkdWxTaVoxdnVhVzBNWSs2T2pnVjc1cUszZ01FZzJDMG01eXV1OVdBNmwxSTd6MWE1bytkc3FKWE53bjFaYURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTUVo0QW5JNENVSEFpa0p0aUIwK01YVzVvZmRhd1FOcm9PaHI2QnorZmtmckFPYkhYRS9WTWhQNzdvbTZSV1FHKzBmVjlPMFdRQTlPVkZ4OURWVjBCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNjYxMDE4NToyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkcVh2Q0xsWEtkQzdHZitUQUJCbXdLbTFsUUJld2VMVWhGR3JJYUdYMzVwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0NTcyNDYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBjUCJ9: process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'DARKSHAN' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'DARK-SHAN-MD' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  ANTI_LINK: process.env.ANTI_LINK === undefined ? false : process.env.ALWAYS_ONLINE,
  WAPRESENCE:process.env.WAPRESENCE === undefined ? false : process.env.WAPRESENCE, // 'composing' (typing) | 'recording' (recording) | 'paused'	
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-0.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'DARKSHAN',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
