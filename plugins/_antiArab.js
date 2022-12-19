/* Creditos a https://github.com/FG98F */

let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`♧︎︎︎ 𝑨𝒏𝒕𝒊 𝒂𝒓𝒂𝒃𝒆𝒔 𝒂𝒄𝒕𝒊𝒗𝒐\n\n𝒉𝒂𝒔𝒕𝒂 𝒍𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('51' || '51')) {
global.db.data.users[m.sender].banned = true
m.reply(`𝙳𝚎𝚝𝚎𝚌𝚝𝚊𝚖𝚘𝚜 𝚞𝚗 𝚙𝚎𝚛𝚞𝚊𝚗𝚘 🦧\n\n𝙰𝚍𝚒𝚘𝚜 𝙲𝚑𝚊𝚗𝚐𝚘 𝙷𝙿 🐒`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
}}
export default handler
