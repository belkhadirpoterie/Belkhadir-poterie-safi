import { Client } from 'twilio';

const accountSid = 'NEW_SID';  // Your Account SID from www.twilio.com/console
const authToken = 'NEW_AUTH_TOKEN'; // Your Auth Token from www.twilio.com/console
const client = new Client(accountSid, authToken);

export const sendWhatsAppMessage = async (to: string, from: string, body: string) => {
    try {
        const message = await client.messages.create({
            body,
            from,
            to
        });
        console.log('WhatsApp message sent:', message.sid);
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
    }
};
