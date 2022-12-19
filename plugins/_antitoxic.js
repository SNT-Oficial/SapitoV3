const toxicRegex = /puto|puta|rata|estupido|imbecil|vrg|mrd|verga|idiota|maricon/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `𝑯𝒐𝒍𝒂 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝑫𝒆𝒄𝒊𝒓 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 (${isToxic}) 𝒆𝒔𝒕𝒂 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒃𝒐𝒕 *${user.warn}/5* advertencia`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 5) {
       user.warn = 0
       await m.reply(`Hola *@${m.sender.split`@`[0]}*, 𝑺𝒖𝒍𝒆𝒓𝒂𝒔𝒕𝒆 5 a𝒅𝒗𝒆𝒆𝒕𝒆𝒏𝒄𝒊𝒂 𝒔𝒆𝒓𝒂𝒔 𝒃𝒍𝒐𝒒𝒖𝒆𝒂𝒅𝒐 𝒚 𝒆𝒍𝒊𝒎𝒊𝒏𝒅𝒂𝒐 𝒅𝒆 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
