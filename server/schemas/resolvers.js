const { AuthenticationError } = require('@apollo/server');
const { User, Todo } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      user: async (parent, { username }) => {
      return User.findOne({ username }).populate('todos');
    },
    todos: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Todo.find(params).sort({ createdAt: -1 });
    },
    todo: async (parent, { thoughtId }) => {
      return Todo.findOne({ _id: todoId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('todos');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addToDo: async (parent, { todo }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          toDoContent,
          toDoAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { todos: todo._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
 
    deleteToDo: async (parent, { todoId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
 
  },
};

module.exports = resolvers;
