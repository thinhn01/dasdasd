module.exports.config = {
	name: "casino",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "ChΖ‘i tΓ i xα»u",
	commandCategory: "Game",
	usages: "",
	cooldowns: 0
};	
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
   
   const request = require('request');
   const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream, fs } = require("fs-extra");
  const { threadID, messageID, senderID } = event;
  const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
  const choose = args[0];
  const kqua = args[1];
  const tiencuoc = args[2];
  if (!existsSync(__dirname + '/cache/casio.jpg')) {
        request('https://raw.githubusercontent.com/tdunguwu/key/main/roulette.jpg').pipe(createWriteStream(__dirname + '/cache/casio.jpg'));
      }
  if(!choose){
    var msg =  {body: `[ πΎπ π½πΌπΎ ]\n=> 1. ππΌπ πππ\n=> 2. πΎππΌπ ππ\n=> 3. ππ πΏπ\n=> 4. ππππ ππ\n=> 5. π½πΌπ πΎππΌ\n=> 6. ππππ\nReply tin nhαΊ―n nΓ y Δα» xem hΖ°α»ng dαΊ«n cΓ‘ch chΖ‘i`, attachment : [
      require("fs").createReadStream(__dirname + "/cache/casio.jpg")
    ]}
   return api.sendMessage(msg,  threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: senderID,
                messageID: info.messageID
            });
        })
  }
  const z = Math.floor(Math.random() * 20);
      const y = Math.floor(Math.random() * 20);
      const dap_an = y - z;
  const x = Math.floor(Math.random() * 100);
  const typ2 = ['chαΊ΅n', 'lαΊ»'];
  const random2 = typ2[Math.floor(Math.random() * typ2.length)];
   var chan = [ 0, 2, 4, 6, 8];
    var le =[1, 3, 5, 7, 9];
    if (random2 == 'chαΊ΅n') {
    var defl_number2 = chan[Math.floor(Math.random() * chan.length)];
  }
  if (random2 == 'lαΊ»') {
    var defl_number2 = le[Math.floor(Math.random() * le.length)];
  }
  const typ = ['tΓ i', 'xα»u'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
   var tai = [4,5,6,7,8,9,10];
    var xiu =[11,12,13,14,15,16,17];
    if (random == 'tΓ i') {
    var defl_number = tai[Math.floor(Math.random() * tai.length)];
  }
  if (random == 'xα»u') {
    var defl_number = xiu[Math.floor(Math.random() * xiu.length)];
  }
  if (choose == 'tΓ i' || choose == 'xα»u') { 
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mα»©c ΔαΊ·t cΖ°α»£c cα»§a bαΊ‘n khΓ΄ng phΓΉ hα»£p hoαΊ·c dΖ°α»i 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Sα» dΖ° bαΊ‘n khΓ΄ng Δα»§ ${kqua}$ Δα» cΓ³ thα» chΖ‘i`, threadID, messageID);
if (choose == random) {
  	await Currencies.increaseMoney(senderID, parseInt(kqua * 2));
  return api.sendMessage(`bαΊ‘n thαΊ―ng bot lαΊ―c ra ${random} ${defl_number} vΓ  nhαΊ­n ΔΖ°α»£c ${kqua * 2}`,event.threadID, event.messageID)
} else {
  await Currencies.decreaseMoney(senderID, parseInt(kqua ));
      return api.sendMessage(`bαΊ‘n thua bot lαΊ―c ra ${random} ${defl_number} vΓ  mαΊ₯t ${kqua}`,event.threadID, event.messageID)}
 }
 if (choose == 'lαΊ»' || choose == 'chαΊ΅n') {
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mα»©c ΔαΊ·t cΖ°α»£c cα»§a bαΊ‘n khΓ΄ng phΓΉ hα»£p hoαΊ·c dΖ°α»i 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Sα» dΖ° bαΊ‘n khΓ΄ng Δα»§ ${kqua}$ Δα» cΓ³ thα» chΖ‘i`, threadID, messageID);
   if (choose == random2) {
      await Currencies.increaseMoney(senderID, parseInt(kqua * 2 ));
  return api.sendMessage(`bαΊ‘n thαΊ―ng bot lαΊ―c ra ${random2} ${defl_number2} vΓ  nhαΊ­n ΔΖ°α»£c ${kqua * 2}`,event.threadID, event.messageID)
} else {
   await Currencies.decreaseMoney(senderID, parseInt(kqua ));
  return api.sendMessage(`bαΊ‘n thua bot lαΊ―c ra ${random2} ${defl_number2} vΓ  mαΊ₯t trαΊ―ng sα» tiα»n ${kqua}`,event.threadID, event.messageID)}
  }
  if (choose == 'lode' || choose == 'lΓ΄' || choose == 'Δα»') { 
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mα»©c ΔαΊ·t cΖ°α»£c cα»§a bαΊ‘n khΓ΄ng phΓΉ hα»£p hoαΊ·c dΖ°α»i 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Sα» dΖ° bαΊ‘n khΓ΄ng Δα»§ ${kqua}$ Δα» cΓ³ thα» chΖ‘i`, threadID, messageID);
    api.sendMessage(`vui lΓ²ng Δα»£i kαΊΏt quαΊ£ lΓ΄ Δα» sau Γ­t phΓΊt hehe`, event.threadID, async (err, info) => {
      await new Promise(resolve => setTimeout(resolve, 120 * 1000));
      api.unsendMessage(info.messageID)
 if(kqua == x){
    await Currencies.inreaseMoney(senderID, parseInt(kqua * 2));
   return api.sendMessage(`bαΊ‘n ΔΓ£ thαΊ―ng vΓ¬ chα»n ${args[1]} vΓ  kαΊΏt quαΊ£ lΓ΄ hΓ΄m nay trΓͺn ΔΓ i cα»§a bot lΓ  ${x} thαΊ§n may mαΊ―n ΔΓ£ Δα» bαΊ‘n vΓ  nhαΊ­n ΔΖ°α»£c sα» tiα»n lΓ  ${kqua * 2} ehehe`, threadID, messageID)
 } else {
    await Currencies.decreaseMoney(senderID, parseInt(kqua ));
return api.sendMessage(`bαΊ‘n ΔΓ£ thua vΓ¬ chα»n ${args[1]} vΓ  kαΊΏt quαΊ£ lΓ΄ hΓ΄m nay trΓͺn ΔΓ i cα»§a bot lΓ  ${x} hjx thαΊ§n may mαΊ―n quΓͺn bαΊ‘n rα»i vΓ  mαΊ₯t sα» tiα»n lΓ  ${kqua}`, threadID, messageID)
 }
    }
    )}
    if (choose == 'hieu' || choose == 'Hieu' || choose == 'Hiα»u') { 
      if(isNaN(kqua)){return api.sendMessage('nqu', threadID, messageID)}
   if(kqua == dap_an){  
      await Currencies.increaseMoney(senderID, parseInt(tiencuoc * 2));
  return api.sendMessage(`bαΊ‘n thαΊ―ng bαΊ‘n chα»n lΓ : ${kqua}\nsα» thα»© nhαΊ₯t bot chα»n lΓ : ${z}\nsα» thα»© nhαΊ₯t bot chα»n lΓ : ${y}\nhiα»u sα» lΓ  ${dap_an} vΓ  bαΊ‘n nhαΊ­n ΔΖ°α»£c sα» tiα»n lΓ  ${tiencuoc * 2}`,threadID, messageID)} else {
     await Currencies.decreaseMoney(senderID, parseInt(tiencuoc  ));
  return api.sendMessage(`bαΊ‘n thua bαΊ‘n chα»n lΓ : ${kqua}\nsα» thα»© nhαΊ₯t bot chα»n lΓ : ${z}\nsα» thα»© nhαΊ₯t bot chα»n lΓ : ${y}\nhiα»u sα» lΓ  ${dap_an} vΓ  mαΊ₯t sα» tiα»n lΓ  ${tiencuoc}`,threadID, messageID)
  }
    }
  if (choose == 'baucua') {
  const slotItems = ["π", "π¦", "π", "π¦", "π", "π¦"];
        const moneyUser = (await Currencies.getData(event.senderID)).money;
            var moneyBet = parseInt(args[2]);
                if (!args[1] || !isNaN(args[1])) return api.sendMessage("HΓ£y BαΊ₯m : /baucua [bαΊ§u/cua/cΓ‘/nai/gΓ /tΓ΄m] [sα» tiα»n]",event.threadID, event.messageID);
                if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("Sα» tiα»n ΔαΊ·t cΖ°α»£c khΓ΄ng ΔΖ°α»£c Δα» trα»ng hoαΊ·c lΓ  sα» tiα»n Γ’m", event.threadID, event.messageID);
	        if (moneyBet > moneyUser) return api.sendMessage("Sα» tiα»n bαΊ‘n ΔαΊ·t lα»n hΖ‘n sα» dΖ° cα»§a bαΊ‘n!", event.threadID, event.messageID);
	    if (moneyBet < 1000) return api.sendMessage("Sα» tiα»n ΔαΊ·t khΓ΄ng ΔΖ°α»£c dΖ°α»i 1000 ΔΓ΄!", event.threadID, event.messageID);
    var number = [], win = false;
for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
    var itemm;
        switch (args[1]) {
            case "bαΊ§u":
                case "BαΊ§u": itemm = "π";
                    break;
            case "cua": 
                case "Cua": itemm = "π¦";
                    break;
            case "cΓ‘":
                case "CΓ‘": itemm = "π";
                    break;
            case "nai":
                case "Nai": itemm = "π¦";
                    break;
            case "gΓ ": 
                case "GΓ ": itemm = "π";
                    break;
            case "tΓ΄m":
                case "TΓ΄m": itemm = "π¦";
                    break;
                        default: return api.sendMessage(" HΓ£y BαΊ₯m : /baucua [bαΊ§u/cua/cΓ‘/nai/gΓ /tΓ΄m] [sα» tiα»n]",event.threadID, event.messageID);
        }
    api.sendMessage("chα» tα» quay cΓ‘i nha UwU",event.threadID, event.messageID);
await new Promise(resolve => setTimeout(resolve, 3 * 1000));
var array = [number[0],number[1],number[2]];
    if (array.includes(itemm)) {
        var i = 0;
            if (array[0] == itemm) i+=1;
                if (array[1] == itemm) i+=1;
            if (array[2] == itemm) i+=1;
        if (i == 1) {
            var mon = parseInt(args[1]) + 300; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`KαΊΏt QuαΊ£ : ${array.join("|")}\n[β€] => ΔΖ°α»£c ${mon} ΔΓ΄,VΓ¬ CΓ³ 1 ${itemm}!`,event.threadID, event.messageID);
        }
        else if (i == 2) {
            var mon = parseInt(args[1]) * 2; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`KαΊΏt QuαΊ£ : ${array.join("|")}\n[β€] => ΔΖ°α»£c ${mon} ΔΓ΄,VΓ¬ CΓ³ 2 ${itemm}!`,event.threadID, event.messageID);
        }
        else if (i == 3) {
            var mon = parseInt(args[1]) * 3; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`KαΊΏt QuαΊ£ : ${array.join("|")}\n[β€] => ΔΖ°α»£c ${mon} ΔΓ΄,VΓ¬ CΓ³ 3 ${itemm}!`,event.threadID, event.messageID);
        }
        else return api.sendMessage("Lα»i ! Code : XX1N",event.threadID,event.messageID);
    } else  {
        await Currencies.decreaseMoney(event.senderID, parseInt(args[1]));
           return api.sendMessage(`KαΊΏt QuαΊ£ : ${array.join("|")}\n[β€] => Trα»« ${args[1]} ΔΓ΄,VΓ¬ CΓ³ 0 ${itemm}!`,event.threadID, event.messageID);
 }
   }
 if (choose == 'slot') { 
   const slotItems = ["π", "π", "π", "π", "π₯­", "π", "π", "π", "π₯", "π₯", "π½"];
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(`π° ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} π°\nBαΊ‘n ΔΓ£ thαΊ―ng`, event.threadID, event.messageID);
           
            break;
        }
        case false: {
            api.sendMessage(`π° Β» ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} Β« π°\nBαΊ‘n ΔΓ£ thua`, event.threadID, event.messageID);
           
            break;
        }
    }
 }

}


 module.exports.handleReply = async function ({
    args, event, Users, api, handleReply, Currencies
}) {
  const { threadID, messageID } = event;
    var { author } = handleReply;
    if (event.senderID != author) return api.sendMessage("cΓΊt mαΊΉ mΓ y Δi", event.threadID, event.messageID); 
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": { 
          return api.sendMessage(`Δα»t mαΊΉ thαΊΏ cΕ©ng phαΊ£i chα» cα»© dΓΉng ${global.config.PREFIX}casino [ TΓI OR Xα»U ]`, threadID, messageID )
        }
        case "2": { 
          return api.sendMessage(`Δα»t mαΊΉ thαΊΏ cΕ©ng phαΊ£i chα» cα»© dΓΉng ${global.config.PREFIX}casino [ ChαΊ΅n OR LαΊ» ]`, threadID, messageID )
        }
        case "3": { 
          return api.sendMessage(`Δα»t mαΊΉ thαΊΏ cΕ©ng phαΊ£i chα» cα»© dΓΉng ${global.config.PREFIX}casino [ Lode Or LΓ΄ Or Δα» ] [ Sα» MΓ  BαΊ‘n Tin TΖ°α»ng ]`, threadID, messageID )
        }
        case "4": {
          return api.sendMessage(`Δα»t mαΊΉ thαΊΏ cΕ©ng phαΊ£i chα» cα»© dΓΉng ${global.config.PREFIX}casino [ hieu Or Hiα»u Or Hieu ] [ Sα» MΓ  BαΊ‘n Tin TΖ°α»ng ]`, event.threadID, event.messageID )            }
         case "5": {
          return api.sendMessage(`Δα»t mαΊΉ thαΊΏ cΕ©ng phαΊ£i chα» cα»© dΓΉng ${global.config.PREFIX}casino [ Baucua ] [ BαΊ§u, cua, cΓ‘, nai, gΓ , tΓ΄m ] [ Sα» tiα»n cαΊ§n ΔαΊ·t cΖ°α»£c ]`, event.threadID, event.messageID )}
        }
    }
    }
}
