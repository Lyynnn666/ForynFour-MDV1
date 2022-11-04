
let fs = require('fs')
let handler = async (m, { conn }) => {

let d = global.dana
let p = global.pulsa
let o = global.ovo
let g = global.gopay
let s = global.shopay


let ehe = `┌─── 〔 D O N A S I 〕 ───
❍ Bantu donasi yuk supaya bot aktif selalu
❍ Donasi untuk Upgrade fitur lebih bagus

Kalian bisa mendukung bot ini dengan cara 

┌〔 PAYMANT 〕
├📌 Dana : ${d}
├📌 Pulsa : ${p}
├📌 ovo : ${o}
├📌 Gopay : ${g}
├📌 Subscribe : https://youtube.com/channel/UCauQ8ous-UOTqj27lEtKUhQ
└────
Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
 ࿑ Owner wa.me/6283890585717 ( pemilik bot )`
  conn.sendButtonImg(m.chat, fotonya1, ehe, wm, 'Owner', '.owner', m) 
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi|donate)$/i

module.exports = handler


