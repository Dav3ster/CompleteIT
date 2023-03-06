const db = require('../config/connection');
const { User, Todo } = require('../models');
const userSeeds = require('./userSeeds.json');
const toDoSeeds = require('./toDoSeeds.json');

db.once('open', async () => {
  try {
    await Todo.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < toDoSeeds.length; i++) {
      const { _id, username } = await Todo.create(toDoSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            todo: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
