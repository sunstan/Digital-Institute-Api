module.exports = ({env}) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1338),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', '0149e482548f4c1c470cb20e954dcc05'),
        },
    },
    smtp: {
        from: env('SMTP_FROM'),
        reply: env('SMTP_REPLY'),
    }
});
