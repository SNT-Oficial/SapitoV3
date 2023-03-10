import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[â] ð¢ð§ð ð«ðð¬ð ðð¥ ð§ð¨ð¦ðð«ð ðð ð®ð§ ð©ðð¢ð¬, ðð£ðð¦ð©ð¥ð¨ ${usedPrefix + command} Mexico*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'PaÃ­s?'
if (json.confirmed) m.reply(`
ð ð©ð¢ðð¬ : ${text}
âðð¨ð§ðð¢ð«ð¦ððð¨ : ${json.confirmed.value}
ððð®ð«ððð¨ : ${json.recovered.value}
â ï¸ð¦ð®ðð«ð­ðð¬ : ${json.deaths.value}
ðð¢ð§ðð¨ ððð­ð®ðð¥ð¢ð³ððð : ${json.lastUpdate}
`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <paÃ­s>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
export default handler
