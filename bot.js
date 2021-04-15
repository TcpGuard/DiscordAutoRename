const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready' , ()=>{
console.log(bot.user.tag)
})
const tag = `!『RED』`
const tag2 = `🎉`
bot.on('message', msg  =>{
    if(!msg.guild)return;
    if(msg.content.startsWith('+command')){ //set command
    msg.guild.members.forEach(m => m.setNickname(`${tag} ${m.user.username}`).then(err => console.log(err)))}
})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
if(newMember.user.bot)return;
if(newMember.displayName.startsWith(`${tag} null`))return newMember.setNickname(`${tag} ` +newMember.user.username);
if(newMember.displayName.startsWith(`${tag}`))return;
if(oldMember.user.username != newMember.user.username){console.log('new username')}
if(oldMember.nickname != newMember.nickname){
    newMember.setNickname(`${tag} ${newMember.nickname}`).then(console.log('changed name'))}
if(oldMember.user.username != newMember.user.username){
    newMember.setNickname(`${tag} ${newMember.user.username}`).then(console.log('changed name'))}
});
bot.on('guildMemberAdd' , member =>{
member.setNickname(`${tag} ${member.user.username}`)
})


bot.login("xx");

