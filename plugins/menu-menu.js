Skip to content
BrunoSobrino
/
Mystic-termux
Public
Code
Issues
Pull requests
Projects
Security
Insights
Mystic-termux/plugins/menu-menu.js
@BrunoSobrino
BrunoSobrino ๐งฟ ๐๐๐ ๐ผ๐ข๐๐๐๐ - ๐ฑ๐๐ ๐ฎ
 6 contributors
658 lines (634 sloc)  30.6 KB
import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
โญโโโใ โฏโฏโฏโฏโฏโฏโฏโฏโฏ ใโโโฎ
โ    โโ *๐๐ก๐ ๐๐ฒ๐ฌ๐ญ๐ข๐ - ๐๐จ๐ญ* โโ
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โโค *๐ola, ${taguser}*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โโค *Owner:* Bruno Sobrino
โโค *Numero:* wa.me/5219992095479
โโค *Bot ofc:* wa.me/529993404349
โโค *PayPal:* https://www.paypal.me/TheShadowBrokers133
โโค *Fecha:* ${date}
โโค *Tiempo activo:* ${uptime}
โโค *Usuarios:* ${rtotalreg}
โฐโโโโกโฏโฏโฏโฏโฏโฏโฏโฏโฏโโโโโฏ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐โ๐ฝ๐ ๐ป๐ผ๐ ๐๐๐๐ธโ๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ *๐๏ธ Nivel:* ${level}
โฃ *๐งฐ Experiencia:* ${exp}
โฃ *โ Rango:* ${role}
โฃ *๐ Diamantes:* ${limit}
โฃ *๐พ MysticCoins:* ${money}
โฃ *๐ช Tokens:* ${joincount}
โฃ *๐๏ธ Premium:* ${user.premiumTime > 0 ? 'โ' : 'โ'}
โโโโโโโโโโโโโโโโโโโโโ
${readMore}
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐น๐๐ ๐๐ฝโ ๐ ๐๐๐น ๐น๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐โ๐ฝ๐ ๐น๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ _${usedPrefix}grupos_
โฃ เถฌโ ๐ _${usedPrefix}estado_
โฃ เถฌโ ๐ _${usedPrefix}infobot_
โฃ เถฌโ ๐ _${usedPrefix}speedtest_
โฃ เถฌโ ๐ _${usedPrefix}donar_
โฃ เถฌโ ๐ _${usedPrefix}grouplist_
โฃ เถฌโ ๐ _${usedPrefix}owner_
โฃ เถฌโ ๐ _${usedPrefix}script_
โฃ เถฌโ ๐ _Bot_ (๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐โ๐ผ ๐โ ๐น๐๐ ๐ธ ๐๐ ๐พโ๐โ๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ฝ _${usedPrefix}join *<enlace / link / url>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐๐ผโ๐น๐๐ - ๐๐ธ๐ป๐๐น๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ค _${usedPrefix}serbot_
โฃ เถฌโ ๐ค _${usedPrefix}stop_
โฃ เถฌโ ๐ค _${usedPrefix}bots_
โโโโโโโโโโโโโโโโโโโโโ  
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐๐๐ผ๐พ๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐๏ธ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}ppt *<papel / tijera /piedra>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}prostituto *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}prostituta *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}gay2 *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}lesbiana *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}pajero *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}pajera *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}puto *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}puta *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}manco *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}manca *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}rata *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}love *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}doxear *<nombre / @tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}pregunta *<texto>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}suitpvp *<@tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}slot *<apuesta>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}ttt *<nombre sala>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}delttt_
โฃ เถฌโ ๐๏ธ _${usedPrefix}simi *<texto>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}top *<texto>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}topgays_
โฃ เถฌโ ๐๏ธ _${usedPrefix}topotakus_
โฃ เถฌโ ๐๏ธ _${usedPrefix}formarpareja_
โฃ เถฌโ ๐๏ธ _${usedPrefix}verdad_
โฃ เถฌโ ๐๏ธ _${usedPrefix}reto_
โฃ เถฌโ ๐๏ธ _${usedPrefix}cancion_
โฃ เถฌโ ๐๏ธ _${usedPrefix}pista_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐ธโ๐๐๐๐ธโ ๐ ๐ป๐ผ๐๐ธโ๐๐๐๐ธโ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *welcome*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *welcome*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *modohorny*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *modohorny*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *antilink*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *antilink*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *antilink2*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *antilink2*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *detect*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *detect*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *audios*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *audios*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *autosticker*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *autosticker*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *antiviewonce*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *antiviewonce*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *antitoxic*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *antitoxic*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *antitraba*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *antitraba*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *antiarabes*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *antiarabes*_
โฃ เถฌโ โ๏ธ _${usedPrefix}enable *modoadmin*_
โฃ เถฌโ โ๏ธ _${usedPrefix}disable *modoadmin*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โฃ *< โ๐ผโ๐โ๐๐ธโ ๐ผโโ๐โ๐ผ๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ฐ _${usedPrefix}reporte *<texto>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐ป๐ผ๐โ๐ธโ๐พ๐ธ๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ฅ _${usedPrefix}instagram *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}instagram2 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}instagram3 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}mediafire *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}instagram *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}gitclone *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}gdrive *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}tiktok *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}xnxxdl *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}xvideosdl *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}twitter *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}fb *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}fb2 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}fb3 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}fb4 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}fb5 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}ytmp3 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}ytmp4 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}dapk2 *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}stickerpack *<enlace / link / url>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}play *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}play.1 *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}play.2 *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}playdoc *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}playlist *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}playlist2 *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}spotify *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}stickerly *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}ringtone *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}soundcloud *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}imagen *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}pinteret *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}wallpaper *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}wallpaper2 *<texto>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}pptiktok *<nombre de usuario>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}igstalk *<nombre de usuario>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}igstory *<nombre de usuario>*_
โฃ เถฌโ ๐ฅ _${usedPrefix}tiktokstalk *<username>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐พโ๐โ๐๐ />* 
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ _${usedPrefix}add *<numero>*_
โฃ เถฌโ ๐ _${usedPrefix}kick *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}kick2 *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}listanum *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}kicknum *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}grupo *<abrir / cerrar>*_
โฃ เถฌโ ๐ _${usedPrefix}grouptime *<opcion> <tiempo>*_
โฃ เถฌโ ๐ _${usedPrefix}promote *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}demote *<@tag>*_
โฃ เถฌโ ๐ _admins *<texto>*_ (๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)
โฃ เถฌโ ๐ _${usedPrefix}demote *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}infogroup_
โฃ เถฌโ ๐ _${usedPrefix}resetlink_
โฃ เถฌโ ๐ _${usedPrefix}link_
โฃ เถฌโ ๐ _${usedPrefix}setname *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}setdesc *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}invocar *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}setwelcome *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}setbye *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}hidetag *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}warn *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}unwarn *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}listwarn_
โฃ เถฌโ ๐ _${usedPrefix}fantasmas_
โฃ เถฌโ ๐ _${usedPrefix}destraba_
โฃ เถฌโ ๐ _${usedPrefix}setpp *<imagen>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< โ๐โ๐๐ผโ๐๐๐ป๐โ๐ผ๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐งง _${usedPrefix}togifaud *<video>*_
โฃ เถฌโ ๐งง _${usedPrefix}toimg *<sticker>*_
โฃ เถฌโ ๐งง _${usedPrefix}tomp3 *<video>*_
โฃ เถฌโ ๐งง _${usedPrefix}tomp3 *<nota de voz>*_
โฃ เถฌโ ๐งง _${usedPrefix}toptt *<video / audio>*_
โฃ เถฌโ ๐งง _${usedPrefix}tovideo *<sticker>*_
โฃ เถฌโ ๐งง _${usedPrefix}tourl *<video / imagen / audio>*_
โฃ เถฌโ ๐งง _${usedPrefix}tts es *<texto>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐ผ๐ฝ๐ผโ๐๐๐ ๐ ๐๐๐พ๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐๏ธ _${usedPrefix}mensajefalso *<nombre|mensaje>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}phmaker *<opcion> <imagen>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}logos *<efecto> <texto>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}logochristmas *<texto>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}logocorazon *<texto>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}ytcomment *<texto>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}hornycard *<@tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}simpcard *<@tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}lolice *<@tag>*_
โฃ เถฌโ ๐๏ธ _${usedPrefix}itssostupid_
โฃ เถฌโ ๐๏ธ _${usedPrefix}pixelar_
โฃ เถฌโ ๐๏ธ _${usedPrefix}blur_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐ฝโ๐ธ๐๐ผ๐ ๐ ๐๐ผ๐๐๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ฅ _${usedPrefix}piropo_
โฃ เถฌโ ๐ฅ _${usedPrefix}consejo_
โฃ เถฌโ ๐ฅ _${usedPrefix}fraseromantica_
โฃ เถฌโ ๐ฅ _${usedPrefix}historiaromantica_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< โ๐ธโ๐ป๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐พ _${usedPrefix}kpop *<blackpink / exo / bts>*_
โฃ เถฌโ ๐พ _${usedPrefix}cristianoronaldo_
โฃ เถฌโ ๐พ _${usedPrefix}messi_
โฃ เถฌโ ๐พ _${usedPrefix}meme_
โฃ เถฌโ ๐พ _${usedPrefix}itzy_
โฃ เถฌโ ๐พ _${usedPrefix}blackpink_
โฃ เถฌโ ๐พ _${usedPrefix}lolivid_
โฃ เถฌโ ๐พ _${usedPrefix}loli_
โฃ เถฌโ ๐พ _${usedPrefix}navidad_
โฃ เถฌโ ๐พ _${usedPrefix}ppcouple_
โฃ เถฌโ ๐พ _${usedPrefix}wpmontaรฑa_
โฃ เถฌโ ๐พ _${usedPrefix}pubg_
โฃ เถฌโ ๐พ _${usedPrefix}wpgaming_
โฃ เถฌโ ๐พ _${usedPrefix}wpaesthetic_
โฃ เถฌโ ๐พ _${usedPrefix}wpaesthetic2_
โฃ เถฌโ ๐พ _${usedPrefix}wprandom_
โฃ เถฌโ ๐พ _${usedPrefix}wallhp_
โฃ เถฌโ ๐พ _${usedPrefix}wpvehiculo_
โฃ เถฌโ ๐พ _${usedPrefix}wpmoto_
โฃ เถฌโ ๐พ _${usedPrefix}coffee_
โฃ เถฌโ ๐พ _${usedPrefix}pentol_
โฃ เถฌโ ๐พ _${usedPrefix}caricatura_
โฃ เถฌโ ๐พ _${usedPrefix}ciberespacio_
โฃ เถฌโ ๐พ _${usedPrefix}technology_
โฃ เถฌโ ๐พ _${usedPrefix}doraemon_
โฃ เถฌโ ๐พ _${usedPrefix}hacker_
โฃ เถฌโ ๐พ _${usedPrefix}planeta_
โฃ เถฌโ ๐พ _${usedPrefix}randomprofile_
โฃ เถฌโ ๐พ _${usedPrefix}neko_
โฃ เถฌโ ๐พ _${usedPrefix}waifu_
โฃ เถฌโ ๐พ _${usedPrefix}akira_
โฃ เถฌโ ๐พ _${usedPrefix}akiyama_
โฃ เถฌโ ๐พ _${usedPrefix}anna_
โฃ เถฌโ ๐พ _${usedPrefix}asuna_
โฃ เถฌโ ๐พ _${usedPrefix}ayuzawa_
โฃ เถฌโ ๐พ _${usedPrefix}boruto_
โฃ เถฌโ ๐พ _${usedPrefix}chiho_
โฃ เถฌโ ๐พ _${usedPrefix}chitoge_
โฃ เถฌโ ๐พ _${usedPrefix}deidara_
โฃ เถฌโ ๐พ _${usedPrefix}erza_
โฃ เถฌโ ๐พ _${usedPrefix}elaina_
โฃ เถฌโ ๐พ _${usedPrefix}eba_
โฃ เถฌโ ๐พ _${usedPrefix}emilia_
โฃ เถฌโ ๐พ _${usedPrefix}hestia_
โฃ เถฌโ ๐พ _${usedPrefix}hinata_
โฃ เถฌโ ๐พ _${usedPrefix}inori_
โฃ เถฌโ ๐พ _${usedPrefix}isuzu_
โฃ เถฌโ ๐พ _${usedPrefix}itachi_
โฃ เถฌโ ๐พ _${usedPrefix}itori_
โฃ เถฌโ ๐พ _${usedPrefix}kaga_
โฃ เถฌโ ๐พ _${usedPrefix}kagura_
โฃ เถฌโ ๐พ _${usedPrefix}kaori_
โฃ เถฌโ ๐พ _${usedPrefix}keneki_
โฃ เถฌโ ๐พ _${usedPrefix}kotori_
โฃ เถฌโ ๐พ _${usedPrefix}kurumi_
โฃ เถฌโ ๐พ _${usedPrefix}madara_
โฃ เถฌโ ๐พ _${usedPrefix}mikasa_
โฃ เถฌโ ๐พ _${usedPrefix}miku_
โฃ เถฌโ ๐พ _${usedPrefix}minato_
โฃ เถฌโ ๐พ _${usedPrefix}naruto_
โฃ เถฌโ ๐พ _${usedPrefix}nezuko_
โฃ เถฌโ ๐พ _${usedPrefix}sagiri_
โฃ เถฌโ ๐พ _${usedPrefix}sasuke_
โฃ เถฌโ ๐พ _${usedPrefix}sakura_
โฃ เถฌโ ๐พ _${usedPrefix}cosplay_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< โ๐๐๐ธโ๐ป๐๐ +๐๐? />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ _${usedPrefix}pack_
โฃ เถฌโ ๐ _${usedPrefix}pack2_
โฃ เถฌโ ๐ _${usedPrefix}pack3_
โฃ เถฌโ ๐ _${usedPrefix}videoxxx_
โฃ เถฌโ ๐ _${usedPrefix}videolesbixxx_
โฃ เถฌโ ๐ _${usedPrefix}tiktokxxx_
โฃ เถฌโ ๐ _${usedPrefix}tetas_
โฃ เถฌโ ๐ _${usedPrefix}booty_
โฃ เถฌโ ๐ _${usedPrefix}ecchi_
โฃ เถฌโ ๐ _${usedPrefix}furro_
โฃ เถฌโ ๐ _${usedPrefix}imagenlesbians_
โฃ เถฌโ ๐ _${usedPrefix}panties_
โฃ เถฌโ ๐ _${usedPrefix}pene_
โฃ เถฌโ ๐ _${usedPrefix}porno_
โฃ เถฌโ ๐ _${usedPrefix}randomxxx_
โฃ เถฌโ ๐ _${usedPrefix}pechos_
โฃ เถฌโ ๐ _${usedPrefix}yaoi_
โฃ เถฌโ ๐ _${usedPrefix}yaoi2_
โฃ เถฌโ ๐ _${usedPrefix}yuri_
โฃ เถฌโ ๐ _${usedPrefix}yuri2_
โฃ เถฌโ ๐ _${usedPrefix}trapito_
โฃ เถฌโ ๐ _${usedPrefix}hentai_
โฃ เถฌโ ๐ _${usedPrefix}nsfwloli_
โฃ เถฌโ ๐ _${usedPrefix}nsfworgy_
โฃ เถฌโ ๐ _${usedPrefix}nsfwfoot_
โฃ เถฌโ ๐ _${usedPrefix}nsfwass_
โฃ เถฌโ ๐ _${usedPrefix}nsfwbdsm_
โฃ เถฌโ ๐ _${usedPrefix}nsfwcum_
โฃ เถฌโ ๐ _${usedPrefix}nsfwero_
โฃ เถฌโ ๐ _${usedPrefix}nsfwfemdom_
โฃ เถฌโ ๐ _${usedPrefix}nsfwglass_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐ผ๐ฝ๐ผโ๐๐๐ ๐ป๐ผ ๐ธ๐๐ป๐๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โ*- ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด ๐ฐ ๐ฐ๐๐ณ๐ธ๐พ ๐พ ๐ฝ๐พ๐๐ฐ ๐ณ๐ด ๐๐พ๐*
โฃ เถฌโ ๐ค _${usedPrefix}bass_
โฃ เถฌโ ๐ค _${usedPrefix}blown_
โฃ เถฌโ ๐ค _${usedPrefix}deep_
โฃ เถฌโ ๐ค _${usedPrefix}earrape_
โฃ เถฌโ ๐ค _${usedPrefix}fast_
โฃ เถฌโ ๐ค _${usedPrefix}fat_
โฃ เถฌโ ๐ค _${usedPrefix}nightcore_
โฃ เถฌโ ๐ค _${usedPrefix}reverse_
โฃ เถฌโ ๐ค _${usedPrefix}robot_
โฃ เถฌโ ๐ค _${usedPrefix}slow_
โฃ เถฌโ ๐ค _${usedPrefix}smooth_
โฃ เถฌโ ๐ค _${usedPrefix}tupai_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< โโ๐ธ๐ ๐ธโ๐โ๐๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ณ _${usedPrefix}start_
โฃ เถฌโ ๐ณ _${usedPrefix}next_
โฃ เถฌโ ๐ณ _${usedPrefix}leave_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐น๐๐โ๐ธ๐ป๐โ๐ผ๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ _${usedPrefix}modapk *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}stickersearch *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}stickersearch2 *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}xnxxsearch *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}animeinfo *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}google *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}letra *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}wikipedia *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}ytsearch *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}apkdone *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}apkgoogle *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}apkmody *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}apkshub *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}happymod *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}hostapk *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}revdl *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}toraccino *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}uapkpro *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}playstore *<texto>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐ธ๐๐ป๐๐๐ />*   
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โ *- ๐ด๐๐ฒ๐๐ธ๐ฑ๐ด ๐ป๐ฐ๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด๐ ๐ฟ๐ฐ๐ป๐ฐ๐ฑ๐๐ฐ๐ ๐พ ๐ต๐๐ฐ๐๐ด๐ ๐๐ธ๐ฝ ๐ฝ๐ธ๐ฝ๐ถ๐๐ฝ ๐ฟ๐๐ด๐ต๐ธ๐น๐พ (#, /, *, .)* 
โ _- (๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)_
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ _Quien es tu sempai botsito 7w7_
โฃ เถฌโ ๐ _Te diagnostico con gay_
โฃ เถฌโ ๐ _A nadie le importa_
โฃ เถฌโ ๐ _Fiesta del admin_
โฃ เถฌโ ๐ _Fiesta del administrador_ 
โฃ เถฌโ ๐ _Vivan los novios_
โฃ เถฌโ ๐ _Feliz cumpleaรฑos_
โฃ เถฌโ ๐ _Noche de paz_
โฃ เถฌโ ๐ _Buenos dias_
โฃ เถฌโ ๐ _Buenos tardes_
โฃ เถฌโ ๐ _Buenos noches_
โฃ เถฌโ ๐ _Audio hentai_
โฃ เถฌโ ๐ _Chica lgante_
โฃ เถฌโ ๐ _Feliz navidad_
โฃ เถฌโ ๐ _Vete a la vrg_
โฃ เถฌโ ๐ _Pasa pack Bot_
โฃ เถฌโ ๐ _Atencion grupo_
โฃ เถฌโ ๐ _Marica quien_
โฃ เถฌโ ๐ _Murio el grupo_
โฃ เถฌโ ๐ _Oh me vengo_
โฃ เถฌโ ๐ _tio que rico_
โฃ เถฌโ ๐ _Viernes_
โฃ เถฌโ ๐ _Baneado_
โฃ เถฌโ ๐ _Sexo_
โฃ เถฌโ ๐ _Hola_
โฃ เถฌโ ๐ _Un pato_
โฃ เถฌโ ๐ _Nyanpasu_
โฃ เถฌโ ๐ _Te amo_
โฃ เถฌโ ๐ _Yamete_
โฃ เถฌโ ๐ _Baรฑate_
โฃ เถฌโ ๐ _Es puto_
โฃ เถฌโ ๐ _La biblia_
โฃ เถฌโ ๐ _Onichan_
โฃ เถฌโ ๐ _Mierda de Bot_
โฃ เถฌโ ๐ _Siuuu_
โฃ เถฌโ ๐ _Epico_
โฃ เถฌโ ๐ _Shitpost_
โฃ เถฌโ ๐ _Rawr_
โฃ เถฌโ ๐ _UwU_
โฃ เถฌโ ๐ _:c_
โฃ เถฌโ ๐ _a_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< โ๐ผโโ๐ธ๐๐๐ผโ๐๐ธ๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐?๏ธ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}tamaรฑo *<cantidad> <imagen / video>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}clima *<paรญs> <ciudad>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}encuesta *<texto1|texto2...>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}afk *<motivo>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}ocr *<responde a imagen>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}acortar *<enlace / link / url>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}calc *<operacion math>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}del *<mensaje>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}whatmusic *<audio>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}readqr *<imagen (QR)>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}qrcode *<texto>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}readmore *<texto1| texto2>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}styletext *<texto>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}traducir *<texto>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}zoom *<texto>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}nowa *<numero>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}covid *<pais>*_
โฃ เถฌโ ๐?๏ธ _${usedPrefix}horario_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< โโ๐พ - ๐๐๐๐๐๐ผ๐ - ๐ผโ๐โ๐๐๐๐ธ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ต _${usedPrefix}adventure_
โฃ เถฌโ ๐ต _${usedPrefix}cazar_
โฃ เถฌโ ๐ต _${usedPrefix}cofre_
โฃ เถฌโ ๐ต _${usedPrefix}balance_
โฃ เถฌโ ๐ต _${usedPrefix}claim_
โฃ เถฌโ ๐ต _${usedPrefix}heal_
โฃ เถฌโ ๐ต _${usedPrefix}lb_
โฃ เถฌโ ๐ต _${usedPrefix}levelup_
โฃ เถฌโ ๐ต _${usedPrefix}myns_
โฃ เถฌโ ๐ต _${usedPrefix}perfil_
โฃ เถฌโ ๐ต _${usedPrefix}work_
โฃ เถฌโ ๐ต _${usedPrefix}minar_
โฃ เถฌโ ๐ต _${usedPrefix}minar2_
โฃ เถฌโ ๐ต _${usedPrefix}buy_
โฃ เถฌโ ๐ต _${usedPrefix}buyall_
โฃ เถฌโ ๐ต _${usedPrefix}verificar_
โฃ เถฌโ ๐ต _${usedPrefix}robar *<cantidad> <@tag>*_
โฃ เถฌโ ๐ต _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
โฃ เถฌโ ๐ต _${usedPrefix}unreg *<numero de serie>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐๐๐โ๐๐ผโ๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ฝ _${usedPrefix}sticker *<responder a imagen o video>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}sticker *<enlace / link / url>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}s *<responder a imagen o video>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}s *<enlace / link / url>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}sfull *<imagen o video>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}scircle *<imagen>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}sremovebg *<imagen>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}semoji *<tipo> <emoji>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}attp *<texto>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}attp2 *<texto>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}attp3 *<texto>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}ttp *<texto>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}ttp2 *<texto>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}ttp3 *<texto>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}ttp4 *<texto>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}ttp5 *<texto>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}pat *<@tag>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}slap *<@tag>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}kiss *<@tag>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}dado_
โฃ เถฌโ ๐ฝ _${usedPrefix}wm *<packname> <author>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}stickermarker *<efecto> <imagen>*_
โฃ เถฌโ ๐ฝ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐๐โ๐ผโ ๐ ๐๐๐ป๐ผโ๐ธ๐ป๐โ๐ผ๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ > *<funcion>*
โฃ เถฌโ ๐ => *<funcion>*
โฃ เถฌโ ๐ $ *<funcion>*
โฃ เถฌโ ๐ _${usedPrefix}setprefix *<prefijo>*_
โฃ เถฌโ ๐ _${usedPrefix}resetprefix_
โฃ เถฌโ ๐ _${usedPrefix}autoadmin_
โฃ เถฌโ ๐ _${usedPrefix}leavegc_
โฃ เถฌโ ๐ _${usedPrefix}cajafuerte_
โฃ เถฌโ ๐ _${usedPrefix}blocklist_
โฃ เถฌโ ๐ _${usedPrefix}block *<@tag / numero>*_
โฃ เถฌโ ๐ _${usedPrefix}unblock *<@tag / numero>*_
โฃ เถฌโ ๐ _${usedPrefix}enable *restrict*_
โฃ เถฌโ ๐ _${usedPrefix}disable *restrict*_
โฃ เถฌโ ๐ _${usedPrefix}enable *autoread*_
โฃ เถฌโ ๐ _${usedPrefix}disable *autoread*_
โฃ เถฌโ ๐ _${usedPrefix}enable *public*_
โฃ เถฌโ ๐ _${usedPrefix}disable *public*_
โฃ เถฌโ ๐ _${usedPrefix}enable *pconly*_
โฃ เถฌโ ๐ _${usedPrefix}disable *pconly*_
โฃ เถฌโ ๐ _${usedPrefix}enable *gconly*_
โฃ เถฌโ ๐ _${usedPrefix}disable *gconly*_
โฃ เถฌโ ๐ _${usedPrefix}enable *anticall*_
โฃ เถฌโ ๐ _${usedPrefix}disable *anticall*_
โฃ เถฌโ ๐ _${usedPrefix}enable *antiprivado*_
โฃ เถฌโ ๐ _${usedPrefix}disable *antiprivado*_
โฃ เถฌโ ๐ _${usedPrefix}enable *modejadibot*_
โฃ เถฌโ ๐ _${usedPrefix}disable *modejadibot*_
โฃ เถฌโ ๐ _${usedPrefix}msg *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}banchat_
โฃ เถฌโ ๐ _${usedPrefix}unbanchat_
โฃ เถฌโ ๐ _${usedPrefix}banuser *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}unbanuser *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}dardiamantes *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}aรฑadirxp *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}banuser *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}bc *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}bcchats *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}bcgc *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}bcbot *<texto>*_
โฃ เถฌโ ๐ _${usedPrefix}cleartpm_
โฃ เถฌโ ๐ _${usedPrefix}restart_
โฃ เถฌโ ๐ _${usedPrefix}update_
โฃ เถฌโ ๐ _${usedPrefix}banlist_
โฃ เถฌโ ๐ _${usedPrefix}addprem *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}delprem *<@tag>*_
โฃ เถฌโ ๐ _${usedPrefix}listprem_
โฃ เถฌโ ๐ _${usedPrefix}listcmd_
โฃ เถฌโ ๐ _${usedPrefix}setppbot *<responder a imagen>*_
โฃ เถฌโ ๐ _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
โฃ เถฌโ ๐ _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
โโโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโโ
โ *< ๐๐ธ๐๐ธ ๐โ๐ธ๐๐๐ธโโ - ๐๐โ๐๐ />*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโ
โฃ เถฌโ ๐ _${usedPrefix}crash๐ท_
โฃ เถฌโ ๐ _${usedPrefix}crash2_
โฃ เถฌโ ๐ _${usedPrefix}crash3_
โฃ เถฌโ ๐ _${usedPrefix}crash4_
โฃ เถฌโ ๐ _${usedPrefix}crash5_
โฃ เถฌโ ๐ _${usedPrefix}crash6_
โฃ เถฌโ ๐ _${usedPrefix}crash7_
โฃ เถฌโ ๐ _${usedPrefix}crash8_
โโโโโโโโโโโโโโโโโโโโโ
`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '๐ฎ ๐ณ๐พ๐ฝ๐ฐ๐ ๐ฎ' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '๐น ๐พ๐๐ฝ๐ด๐ ๐น' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '๐พ ๐ธ๐ฝ๐ต๐พ๐ฑ๐พ๐ ๐พ' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '๐ ๐๐๐ ๐๐๐๐๐๐ - ๐๐๐ ๐',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[โ๐๐๐๐โ] ๐ด๐ป ๐ผ๐ด๐ฝ๐ ๐๐ธ๐ด๐ฝ๐ด ๐๐ฝ ๐ด๐๐๐พ๐ ๐ ๐ฝ๐พ ๐ต๐๐ด ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด ๐ด๐ฝ๐๐ธ๐ฐ๐๐ป๐พ, ๐๐ด๐ฟ๐พ๐๐๐ด๐ป๐พ ๐ฐ๐ป ๐ฟ๐๐พ๐ฟ๐ธ๐ด๐๐ฐ๐๐ธ๐พ ๐ณ๐ด๐ป ๐ฑ๐พ๐*', m)
}}
handler.command = /^(menu|menรบ|memu|memรบ|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
Footer
ยฉ 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Mystic-termux/menu-menu.js at master ยท BrunoSobrino/Mystic-termux
