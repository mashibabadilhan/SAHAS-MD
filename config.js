const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"GDSRPBPhzMy6NOYjm+4n5VHskSyamXcFeaU3CZU09U4="},"public":{"type":"Buffer","data":"OD+G91Z5nlHPBqnjp4q2Bub/5nizfwmzybcdtDRF9gE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"gKVLCqhAGmN+2R3iXuSX73SCD66Dsq2pYU1FJUa82EY="},"public":{"type":"Buffer","data":"NNAtazFBAwtuC5mQRQN9GbO9SK95dqPwOq0biTXILH4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KCQXczs/185h5o2EjOy4bXpp5w4NJ2oKjdLUxs+p6VY="},"public":{"type":"Buffer","data":"mJttWcftfqm8Ks9Wkm05MZKVT5qE/dn8ckmwautTvQ0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qM4yQgqmJtWQ28YhWk5/+hQTdSF1rNwIuXcQiMPWAGg="},"public":{"type":"Buffer","data":"AMM6tfep3DLevLWNjj+aPGNi6H3aAWRz+w6df9QvniI="}},"signature":{"type":"Buffer","data":"qQYtAwAMAuNhcOx6LUWMZMBwc/HC5tjAOEO+ArjLacXNAAlt9Is7HrJfognyf4T++1QuhrTbWkjSw/SiEPb6Ag=="},"keyId":1},"registrationId":143,"advSecretKey":"uGD8armZiaLN/oc5D7wAJn23KztAhslLRRNh7E1eAvw=","processedHistoryMessages":[{"key":{"remoteJid":"94775050312@s.whatsapp.net","fromMe":true,"id":"FA343808102172C29C5BF2A19BF320BE"},"messageTimestamp":1731241472}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"X461PWNV","me":{"id":"94775050312:2@s.whatsapp.net","name":"දිල්හාන්","lid":"192135831797854:2@lid"},"account":{"details":"CLHfr+4GEO7LwrkGGAQgACgA","accountSignatureKey":"mQdRPNLCs1tSH0fnayFUQH7TW6gIo5pTBSixCV6Ez08=","accountSignature":"VIJqsdCvafmVTcIawN5/qg198/3dhHSYybuitfTxpSycS88iQL87J8UEzHc3Mrdljq3eSljRwmZ2kNn7wgbgCg==","deviceSignature":"IEZ4NubozuQTFEFQzXG2M1sIWgg8KdEmMasls1r0UIao5IuC5h3WDFo3se2wqQ4pWCNAfMC3BsBE9yA8EV4PDA=="},"signalIdentities":[{"identifier":{"name":"94775050312:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZkHUTzSwrNbUh9H52shVEB+01uoCKOaUwUosQlehM9P"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUIDQ=="},"lastAccountSyncTimestamp":1731241466,"lastPropHash":"4eUNDn","myAppStateKeyId":"AAAAAMoI"}",
  // ADD Your Session Id 
  MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
    // ADD Your MongoDB Database URL
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94718913389",
  //========================================- OTHER - CONFIGS -=====================================================================
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakayo,huththo").split(','),
  ANTI_LINK: process.env.ANTILINK || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "true",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  packname: process.env.packname || "SAHAS TECH",
  author: process.env.author || "SAHAS TECH",
  //==========================================- API-CONFIGS -==========================================================
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "2d61a72574c11c4f36173b627f8cb177", //openweathermap.org
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "sk_6438bcc100d96458f8de0602aec662f4ba14b905fd090ad3", //elevenlabs.io
  SHODAN_API: process.env.SHODAN_API || "cbCkidr6qd7AFVaYs56MuCouGfM8gFki", //developer.shodan.io
  PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH", // pexels.com
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY || "23378594-7bd620160396da6e8d2ed4d53", // pixabay.com
  ZIPCODEBASE_API_KEY: process.env.ZIPCODEBASE_API_KEY || "0f94a5f0-6ea4-11ef-81da-579be4fb031c", // zipcodebase.com
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",


//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  START_MSG: process.env.START_MSG || `🚀 *_SAHAS-MD Connected Successfully!_* ✅ 

--- *👨‍💻🎉 _Welcome to SAHAS-MD!_* 🎉💗 

*🔹 PREFIX:* .

*🔹 OWNER:* 94718913389


_Thank you for using_ *👨‍💻SAHAS-MD💗.*
_We're here to make your experience enjoyable and seamless._
_If you need any help or have questions, don't hesitate to ask._ 🌝💗

*🖇️Join My WhatsApp Channel✓💗 - :* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

*🖇️Subscribe My Youtube Channel✓💗 - :* https://www.youtube.com/@Sahas_Tech

*🖇️Fork & Star My Repo✓💗 - :* https://github.com/SahasTech22/SAHAS-MD

*🖇️Follow My Github Account✓💗 - :* https://github.com/SahasTech22

_*👨‍💻 Enjoy your time with us! 😊*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/de82e3.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/de82e3.jpg",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
    MENU_MS: process.env.MENU_MS || `menu 2`,

};
