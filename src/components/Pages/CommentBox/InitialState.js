import { v4 as uuidv4 } from 'uuid';

const initialState = [

  { id: uuidv4(), 
    firstName: 'Bruce', 
    lastName: 'Apos', 
    comment: 'Val did a really great job with this site. It is very creative yet still looks very clean. You will not go wrong if you choose to work with Val. 5 stars!!!' },

  { id: uuidv4(), 
    firstName: 'Jatt', 
    lastName: 'Icamina', 
    comment: 'Val is such a great trackmate. He is really good at what he does. You know you can count on him if you need his help. Despite all that, he did struggle a bit with databases, and for that, I will rate him 8/10.'},

  { id: uuidv4(), 
    firstName: 'JC', 
    lastName: 'Basilio', 
    comment: 'I could not recommend Val enough. He is very resourceful. If he hits a bump in the road, he still tries to find a way to work around it. I really like his persistance and perseverance. Great working with Val.' },

  { id: uuidv4(), 
    firstName: 'Herbert', 
    lastName: 'Amora', 
    comment: 'It is so refreshing to see a fellow bisaya in the team. Having similar cultural backgrounds, we can easily get along with each other. That makes us really productive when working together. 11/10 would recommend to anyone!' }

];

export default initialState;