let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu.png'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─[ *𝐒𝐚𝐩𝐢𝐭𝐨 𝐁𝐨𝐭* ]
│ *➤ 𝐇𝐨𝐥𝐚 ${name}*
│
│ *ミ🤖 𝐄𝐬𝐭𝐚𝐝𝐨 𝐝𝐞𝐥 𝐁𝐨𝐭 🤖彡*
│ *=> 𝐀𝐜𝐭𝐢𝐯𝐨 ✅*
│ *=> 𝐮𝐬𝐨 𝐩𝐮𝐛𝐥𝐢𝐜𝐨 ✅*
│ *=> 𝐓𝐢𝐞𝐦𝐩𝐨 𝐚𝐜𝐭𝐢𝐯𝐨: ${uptime}*
╰───────────────
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
