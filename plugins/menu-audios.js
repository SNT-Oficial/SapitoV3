const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ใ๐ ๐๐จ๐ฅ๐ _${name}_ ๐ๅฝก*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

*<๐๐๐ง๐ฎ ๐๐ฎ๐๐ข๐จ๐ฌ/>*
*- ๐๐ฌ๐๐ซ๐ข๐๐ ๐ฅ๐๐ฌ ๐ฌ๐ข๐ ๐ฎ๐ข๐๐ง๐ญ๐๐ฌ ๐ฉ๐๐ฅ๐๐๐ซ๐๐ฌ ๐จ ๐๐ซ๐๐ฌ๐๐ฌ ๐ฌ๐ข๐ง ๐ง๐ข๐ง๐ ๐ฎ๐ง ๐ฉ๐ซ๐๐๐ข๐ฃ๐จ (#, /, *, .)*

ยฐ เถฌโ๐ _Quien es tu sempai botsito 7w7_
ยฐ เถฌโ๐ _Te diagnostico con gay_
ยฐ เถฌโ๐ _A nadie le importa_
ยฐ เถฌโ๐ _Fiesta del admin_
ยฐ เถฌโ๐ _Fiesta del administrador_ 
ยฐ เถฌโ๐ _Vivan los novios_
ยฐ เถฌโ๐ _Feliz cumpleaรฑos_
ยฐ เถฌโ๐ _Noche de paz_
ยฐ เถฌโ๐ _Buenos dias_
ยฐ เถฌโ๐ _Buenos tardes_
ยฐ เถฌโ๐ _Buenos noches_
ยฐ เถฌโ๐ _Audio hentai_
ยฐ เถฌโ๐ _Chica lgante_
ยฐ เถฌโ๐ _Feliz navidad_
ยฐ เถฌโ๐ _Vete a la vrg_
ยฐ เถฌโ๐ _Pasa pack Bot_
ยฐ เถฌโ๐ _Atencion grupo_
ยฐ เถฌโ๐ _Marica quien_
ยฐ เถฌโ๐ _Murio el grupo_
ยฐ เถฌโ๐ _Oh me vengo_
ยฐ เถฌโ๐ _tio que rico_
ยฐ เถฌโ๐ _Viernes_
ยฐ เถฌโ๐ _Baneado_
ยฐ เถฌโ๐ _Sexo_
ยฐ เถฌโ๐ _Hola_
ยฐ เถฌโ๐ _Un pato_
ยฐ เถฌโ๐ _Nyanpasu_
ยฐ เถฌโ๐ _Te amo_
ยฐ เถฌโ๐ _Yamete_
ยฐ เถฌโ๐ _Baรฑate_
ยฐ เถฌโ๐ _Es puto_
ยฐ เถฌโ๐ _La biblia_
ยฐ เถฌโ๐ _Onichan_
ยฐ เถฌโ๐ _Mierda de Bot_
ยฐ เถฌโ๐ _Siuuu_
ยฐ เถฌโ๐ _Epico_
ยฐ เถฌโ๐ _Shitpost_
ยฐ เถฌโ๐ _Rawr_
ยฐ เถฌโ๐ _UwU_
ยฐ เถฌโ๐ _:c_
ยฐ เถฌโ๐ _a_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/SNT-Oficial/SapitoV3', '๐ถ๐ธ๐๐ท๐๐ฑ', null, null, [
['๐ผ๐ด๐ฝ๐ ๐ฟ๐๐ธ๐ฝ๐ฒ๐ธ๐ฟ๐ฐ๐ป', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menรบ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio|keyaudio|keyaudios)$/i
handler.fail = null
export default  handler
