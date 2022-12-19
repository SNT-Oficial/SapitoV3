import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] 𝐢𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐧 𝐩𝐚𝐢𝐬, 𝐞𝐣𝐞𝐦𝐩𝐥𝐨 ${usedPrefix + command} Mexico*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'País?'
if (json.confirmed) m.reply(`
🌏 𝐩𝐢𝐚𝐬 : ${text}
✅𝐜𝐨𝐧𝐟𝐢𝐫𝐦𝐚𝐝𝐨 : ${json.confirmed.value}
📉𝐜𝐮𝐫𝐚𝐝𝐨 : ${json.recovered.value}
☠️𝐦𝐮𝐞𝐫𝐭𝐞𝐬 : ${json.deaths.value}
💌𝐢𝐧𝐟𝐨 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐝𝐚 : ${json.lastUpdate}
`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <país>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
export default handler
