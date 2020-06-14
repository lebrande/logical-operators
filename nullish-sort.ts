const settings = [
  {
    name: 'bannana',
    order: 0,
  },
  {
    name: 'apple',
    order: 1,
  },
  {
    name: 'grape',
    order: 2,
  },
];

const fruitList = [
  'grape',
  'strawberry',
  'kiwi',
  'bannana',
  'apple',
];

const sortedFruitsData = fruitList
  .map((fruit) => {
    return {
      name: fruit,
      // expects banana as first on list becouse index is equal 0
      // but banana got 100 because !!order for order=0 returns false 
      // order: settings.find(({ name }) => name === fruit)?.order || 100,
      order: settings.find(({ name }) => name === fruit)?.order ?? 100,
    };
  })
  .sort(({ order: a }, { order: b }) => {
    if (a === b) {
      return 0;
    }

    return a > b ? 1 : -1;
  });


console.log({ sortedFruitsData });



