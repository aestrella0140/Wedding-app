const { GraphQLError } = require('graphql');

const jwt = require('jsonwebtoken');

const secret = 'woodchuck';
const expiration = '2hr';

module.exports = {
    AuthenticationError: new GraphQLError('Couldnt authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('invalid token');
            const decodedToken = jwt.decode(token, { complete: true });
            console.log(decodedToken);
        }

        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        return jwt.sign({ data: payload}, secret, { expiresIn: expiration });
    },
};