module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c831a3ddcc2cbf19ca939872c716f2c7'),
  },
});
