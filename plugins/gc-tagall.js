let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* ${pesan}`
let teks = `*╭┈┈┈┈┈ ° ᡣ𐭩 . ° .•* 
¿ 𝘋𝘦𝘴𝘦𝘢𝘴 𝘶𝘯 𝘣𝘰𝘵 𝘢𝘤𝘵𝘪𝘷𝘰 𝘱𝘢𝘳𝘢 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰 ?
 💌 𝘐𝘯𝘧𝘰 𝘤𝘰𝘯 𝘢𝘭𝘨𝘶𝘯𝘢 𝘥𝘦 𝘭𝘢𝘴 𝘢𝘥𝘮𝘪𝘯
 https://chat.whatsapp.com/HhZUtxp2KRTD5rD5j09VCy
*╰───────────*\n\n➥ ${oi}\n\n➥ *𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:*\n`
for (let mem of participants) {
teks += `ʚɞ 💋 @${mem.id.split('@')[0]}\n`}
teks += `└𝗩𝗮𝗹𝘂𝗕𝗼𝘁-𝗠𝗗`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler