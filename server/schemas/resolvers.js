// const { AuthenticationError } = require('@apollo/server');
const { AuthenticationError } = require('apollo-server-express');
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
    todo: async (parent, { todoId }) => {
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
    addTodo: async (parent, { todo }, context) => {
      if (context.user) {
        const todo = await Todo.create({
          date: date,
          title: title,
          description: description,
          priority: priority,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { todos: todo._id } }
        );

        return todo;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    editTodo: async (parent, { todo }, context) => {
      if (context.user) {
        const todo = await Todo.create({
          date: date,
          title: title,
          description: description,
          priority: priority,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { todos: todo._id } }
        );

        return todo;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
 
    deleteTodo: async (parent, { todoId }, context) => {
      if (context.user) {
        const todo = await Todo.findOneAndDelete({
          _id: todoId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { todos: todo._id } }
        );

        return todo;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
 
  },
};

module.exports = resolvers;
