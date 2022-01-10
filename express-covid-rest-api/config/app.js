(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1641804805757
//APP_KEY=3AhqvhJJpxaJOYvDBIHBuRcP5Cw6ZmkegUjbi0ZwshSwpaFmAxPt6RMuN7_Ij_Y50edzTFZ29mWWJejSgCbxzw
//UNIX=1641806667023
//APP_KEY=XqDRtrj6HdngdDsK_cwjrnPYiYXRz7yB8fGml96bWUaAQ9LNVFK8xkgyFzWiCfnPX8JyUNjWBMtSEiIOQnBDyA