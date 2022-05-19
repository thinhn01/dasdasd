module.exports.config = {
	name: "log",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "=== ʕ •ᴥ•ʔ ===" +
                        "\n\n» Băng Hải Tặc Có  ID: " + event.threadID +
                        "\n»  Có Hành Động: {task}" +
                        "\n» Hành Động Này Được Thực Hiện Bởi ID: " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Không Tồn Tại..",
                    newName = event.logMessageData.name || "Không Tồn Tại...";
            task = "Thành Viên Trong Băng Đổi Tên Băng : '" + oldName + "' Thành '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "[ ARC ] Ai Đó Vừa Thêm Tui Vô Box Mới Á 🥺";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "[ ARC ] Admin Ới Tui Bị Kick Ời"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}