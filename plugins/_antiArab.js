/* Creditos a https://github.com/FG98F */

let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`ā§ļøļøļø šØššš šššššš šššššš\n\nššššš šš ššššššš`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('51' || '51')) {
global.db.data.users[m.sender].banned = true
m.reply(`š³ššššššššš šš ššššššš š¦§\n\nš°šššš š²ššššš š·šæ š`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
}}
export default handler
