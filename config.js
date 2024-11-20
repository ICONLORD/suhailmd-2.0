const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348067676597";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_41_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk2LFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJscEp6eWs5VzFhbDJPcnU4UXNIODVHaHZlTXRmTFN3M2dBbFBxVlBvRC9NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4WnFtT0sxNFRqU3M0WE8xeHE3aF9nXCIsXG4gIFwicGhvbmVJZFwiOiBcImZjMzBlNzJlLWQ4YzktNDEyOC05YjhkLWE0MTU4MTFmODZjMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAxNTEsXG4gICAgICAyMjMsXG4gICAgICAyNixcbiAgICAgIDI3LFxuICAgICAgODcsXG4gICAgICA2NixcbiAgICAgIDgxLFxuICAgICAgMTc2LFxuICAgICAgNDgsXG4gICAgICAyMjYsXG4gICAgICAyMTQsXG4gICAgICAyMTksXG4gICAgICA1MixcbiAgICAgIDY2LFxuICAgICAgMjIzLFxuICAgICAgODgsXG4gICAgICAxNDAsXG4gICAgICA1OSxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDEyNSxcbiAgICAgIDEyNixcbiAgICAgIDY4LFxuICAgICAgMjQ4LFxuICAgICAgMTgxLFxuICAgICAgMTY0LFxuICAgICAgMTgyLFxuICAgICAgMTY1LFxuICAgICAgNDEsXG4gICAgICAxMSxcbiAgICAgIDIwNixcbiAgICAgIDIyMixcbiAgICAgIDE1OCxcbiAgICAgIDIxLFxuICAgICAgMTE0LFxuICAgICAgMjMxLFxuICAgICAgMTcwLFxuICAgICAgMjQsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjRERUUzTFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjc2NzY1OTc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNTcyNDMyMjgzOTQ6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmkrNmJBR0VJZUcrTGtHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWVlhTZjJCaUZvR1Yweno1WUdZODFTc3VKTG10aGdaN2RMZ3JDMnV4eEJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjIwNUVMU1pMZU5wRGkzdldac2RDOGo2cW1ZdXVSR0Exdnc5djlOUDJienNpdjFaQlAveExLNy9mdEpUZCt6ZGFnYzZiWlZvelBXMVB2YnFIeFIyVkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1Jd3o4ck9BendtdWRPQncyRzluTUVXMTIwSW9zM3k0Z09NU2lKcytwYU5pbDh5VnBVaUs3WmFmZ25EbUpENGt5K25IRklFQllDcGNvWXE0RW16RmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjc2NzY1OTc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjExNzI2MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
