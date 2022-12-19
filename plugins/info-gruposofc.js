let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝐡𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 👋🏻, 𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐮𝐧𝐢𝐫𝐭𝐞 𝐚 𝐥𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬 𝐝𝐞 𝑺𝒂𝒑𝒊𝒕𝒐𝑩𝒐𝒕 - 𝐓𝐞𝐚𝐦 𝐩𝐚𝐫𝐚... 𝐧𝐨 𝐬𝐞 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐛𝐨𝐭 :D*

*➤ 𝐆𝐫𝐮𝐩𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬:*
*1.-* https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC

*2.-* https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432

*3.-* https://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk

`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
