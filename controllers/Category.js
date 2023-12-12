const db = require('../db');
const Category = require('../category');
const SEED_CATEGORY = [
  {
    name: 'Household',
  },
  {
    name: 'Transportation',
  },
  {
    name: 'Entertainment',
  },
  {
    name: 'Eating out',
  },
  {
    name: 'Utilities',
  },
  {
    name: 'School',
  },
  {
    name: 'Other',
  },
];

const CATEGORY_ICON = {
  Household: 'fa-solid fa-house',
  Transportation: 'fa-solid fa-van-shuttle',
  Entertainment: 'fa-solid fa-face-grin-beam',
  Eating Out: 'fa-solid fa-utensils',
  Other: 'fa-solid fa-pen',
};

db.once('open', async () => {
  try {
    await Promise.all(
      Array.from({ length: SEED_CATEGORY.length }, (_, i) =>
        Category.create({
          name: SEED_CATEGORY[i].name,
          icon: CATEGORY_ICON[SEED_CATEGORY[i].name],
        })
      )
    );
    console.log('Seed category data created!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
});
