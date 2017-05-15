var user = {
  name: 'Chase',
  location: 'Draper',
  occupations: ["Repair Tech",'Student'],
  hobbies: [
    {
      name: 'Hiking',
      type: 'Exercise'
    },
    {
      name: 'Skiing',
      type: 'Exercise'
    },
    {
      name: 'League of Legends',
      type: 'Game'
    }
  ],
  family: [
    {
      name: 'Maddie',
      relation: 'Wife',
      gender: 'Female'
    },
    {
      name: 'Kris',
      relation: 'Mother',
      gender: 'Female'
    },
    {
      name: 'Chuck',
      relation: 'Father',
      gender: 'Male'
    }
  ],
  restaurants: [
    {
      name: 'Cafe Rio',
      type: 'Mexican',
      rating: 10
    },
    {
      name: 'Chic-fil-a',
      type: 'fast-food',
      rating: 1
    },
    {
      name: 'Porcupine Grill',
      type: 'Bar Food',
      rating: 9.5
    }
  ]
}
;
module.exports = user;