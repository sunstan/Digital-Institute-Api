module.exports = ({env}) => ({
    email: {
        provider: 'nodemailer',
        providerOptions: {
            tls: {
                rejectUnauthorized: false
            },
            host: env('SMTP_HOST'),
            port: env('SMTP_PORT'),
            auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
            },
        },
        settings: {
            defaultFrom: env('SMTP_FROM'),
            defaultReplyTo: env('SMTP_REPLY'),
        },
    },
});
