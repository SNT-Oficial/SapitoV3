let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝑬𝒑𝒂𝒂!! 𝑬𝒍 𝒂𝒏𝒕𝒊𝒍𝒊𝒌 𝒆𝒔𝒕𝒂 𝒂𝒄𝒕𝒊𝒗𝒐, 𝒑𝒆𝒓𝒐 𝒆𝒓𝒆𝒔 𝒂𝒅𝒎𝒊𝒏 😎, 𝒔𝒔𝒍𝒗𝒂𝒅𝒐/𝒂!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝑨𝒅𝒊𝒐𝒔 𝒊𝒎𝒃𝒆𝒄𝒊𝒍 🖕, ${await this.getName(m.sender)} 𝑹𝒐𝒎𝒑𝒊𝒔𝒕𝒆𝒔 𝒍𝒂𝒔 𝒓𝒆𝒈𝒍𝒂𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒂𝒉𝒐𝒓𝒂 𝒔𝒆𝒓𝒂𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐 𝒑𝒐𝒓 𝒈𝒊𝒍*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝑵𝒐 𝒔𝒐𝒚 𝒂𝒅𝒎𝒊𝒏, 𝑵𝒐 𝒑𝒖𝒆𝒅𝒐 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒆𝒕𝒆 :v*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝑴𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆 𝒉𝒂𝒃𝒊𝒍𝒊𝒕𝒂𝒅𝒐 𝒍𝒂𝒔 𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒄𝒊𝒐𝒏𝒆𝒔 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒂 𝒄𝒐𝒏 𝒆𝒍 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒍𝒐 𝒉𝒂𝒃𝒊𝒍𝒊𝒕𝒆*')
}
return !0
}
