const { User, RSVP } = require('../models');
const { signToken, AuthenticatrionError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        me: async (parent, args, context ) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }

            throw AuthenticatrionError;
        },
        getRSVPs: async () => {
            return await RSVP.find();
        }
    },

    Mutation: {
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticatrionError('No user with this email');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw)  {
                throw new AuthenticatrionError('incorrect password');
            }

            const token = signToken(user);
            return { token, user };
        },

        removeUser: async (parent, args, context) => {
            if (context.user.isAdmin) {
                return User.findByIdAndDelete({ _id: context.user._id });
            }

            throw AuthenticatrionError;
        },
        createRSVP: async(_, { name, email, attending , guests }) => {
            const newRSVP = new RSVP({ name, email, attending, guests });
            await newRSVP.save();
            return newRSVP;
        },
    },
};

module.exports = resolvers;