'use strict';

module.exports = {

    send: async ctx => {

        const subject = 'Demande d\'informations';
        const from = strapi.config.get('server.smtp.from');
        const replyTo = strapi.config.get('server.smtp.reply');
        const {firstname, lastname, email, phone, message} = ctx.request.body;
        if (!firstname || !lastname || !email || !phone || !message) throw new Error();

        try {
            const contact = await strapi.query('contact-page', null).findOne();
            const to = contact['email'];

            await strapi.plugins['email'].services.email.send({
                to,
                from,
                replyTo,
                subject,
                text: message
                    + '\n\n' + 'Adresse email: ' + email
                    + '\n\n' + 'Téléphone: ' + phone
            });

            ctx.send({success: true});

        } catch (e) {
            throw new Error(e);
        }
    }
};
