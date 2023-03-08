const db = require('../config/connection');
const { User, Todo } = require('../models');
const userSeeds = require('./userSeeds.json');
const toDoSeeds = require('./toDoSeeds.json');

db.once('open', async () => {
  try {
    await Todo.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Todo.create(toDoSeeds);

    // for (let i = 0; i < toDoSeeds.length; i++) {
    //   const { _id, date, title, description,priority, username } = await Todo.create(toDoSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: username },
    //     {
    //       $addToSet: {
    //         todo: _id,
    //         date: date,
    //         title: title,
    //         description: description,
    //         priority: priority

            

    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
