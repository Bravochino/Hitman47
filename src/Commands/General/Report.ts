import { BaseCommand, Command, Message } from '../../Structures';

interface CustomMessageContent {
    text: string;
    footer: string;
    headerType?: number; 
}

@Command('report', {
    description: 'report to owner MARIA-BOT🤭',
    usage: 'report',
    category: 'general',
    exp: 10,
    cooldown: 10
})
export default class command extends BaseCommand {
    override execute = async ({ from, sender, message }: Message): Promise<void> => {
        const faqText = ` *TYPE ${this.client.config.prefix}report* *CLICK THIS LINK* 
🔗 *https://wa.me/+255694039542?text=Hi%20*Mr.%20𝐉𝐅𝐋𝐄𝐗*%20I%20think%20your%20the%20bot%20Owner%20i%20need%20your%20help%20bro*`;

        const footerText = '© Hitman47 Inc 2024';

        const messageContent: CustomMessageContent = {
            text: faqText,
            footer: footerText,
            headerType: 1
        };

        return void (await this.client.sendMessage(from, messageContent, {
            quoted: message
        }));
    }
 }
