//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 5000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `El administrador @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ DESACTIVAR ANTI TRABAS ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin && bot.restrict) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `𝑴𝒂𝒓𝒄𝒂𝒓 𝒄𝒉𝒂𝒕 𝒄𝒐𝒎𝒐 𝒍𝒆𝒊𝒅𝒐 ✓\n${"\n".repeat(400)}\n=> 𝒆𝒍 𝒏𝒖𝒎𝒆𝒓𝒐 : wa.me/${m.sender.split("@")[0]}\n=> 𝑨𝒍𝒊𝒂𝒔 : ${name}\n[ ! ] 𝑨𝒄𝒂𝒃𝒂 𝒅𝒆 𝒅𝒏𝒗𝒊𝒂𝒓 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒒𝒖𝒆 𝒄𝒐𝒏𝒕𝒊𝒆𝒏𝒆 𝒎𝒖𝒄𝒉𝒐𝒔 𝒄𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 𝒒𝒖𝒆 𝒑𝒖𝒆𝒅𝒆 𝒐𝒄𝒂𝒄𝒊𝒐𝒏𝒂𝒓 𝒇𝒂𝒍𝒍𝒂𝒔 𝒆𝒏 𝒍𝒐𝒔 𝒅𝒊𝒔𝒑𝒐𝒄𝒊𝒕𝒊𝒗𝒐𝒔`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!')
    }
    return !0
}
