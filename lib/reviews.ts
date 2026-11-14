export type Review = {
  name: string;
  rating: number;
  text: string[];
};

export const reviews: Review[] = [
  {
    name: "Hannah",
    rating: 5,
    text: [
      "Everything about bringing our girl home was straightforward and lovely. You can really tell from her temperament how well she was cared for before we met her.",
      "It's clear this breeder genuinely loves these cats. The cattery was spotless, well organised, and every kitten looked happy and settled.",
      "Before collection day we were given plenty of guidance and advice, which made the whole handover feel easy. They've stayed in touch since we brought her home, and it's reassuring knowing support is just a message away.",
    ],
  },
  {
    name: "Marcus",
    rating: 5,
    text: [
      "These kittens are some of the most affectionate, good-natured cats I've come across. Our boy has turned into an absolute companion, and honestly I couldn't have asked for a better match.",
      "Whenever I had questions, the breeder was quick to help and clearly knew these cats inside and out. You can tell by his temperament that he was raised with real care and attention.",
    ],
  },
  {
    name: "Priya",
    rating: 5,
    text: [
      "Our girl is just stunning, and more importantly she's healthy and incredibly affectionate. Every interaction with the breeder has been honest and transparent, and I'd recommend them without hesitation.",
    ],
  },
  {
    name: "Danielle",
    rating: 5,
    text: [
      "Choosing a breeder felt like a big decision. These cats really do become part of the family, so we wanted to feel good about who was raising ours.",
      "From our very first message, communication was warm and easy. We got regular updates and loved watching our kitten go from a tiny fluffball into a confident little personality.",
    ],
  },
  {
    name: "Oliver",
    rating: 5,
    text: [
      "You can tell straight away how much care goes into raising these cats. Ours has the loveliest nature and has turned into such a confident, friendly little mate.",
      "Would recommend this breeder to anyone after a kitten that's genuinely well socialised and ready for family life.",
    ],
  },
  {
    name: "Chloe W.",
    rating: 5,
    text: [
      "From that first enquiry right through to pickup day, the whole experience was lovely. We really valued the tips on feeding, grooming and helping our kitten settle in.",
      "He's cheeky, affectionate and gorgeous, and he's slotted into our household like he's always been here.",
    ],
  },
  {
    name: "Grace T.",
    rating: 5,
    text: [
      "She arrived home clean, calm and completely settled within days, and she's been wonderful with our kids from day one.",
      "The advice we were given beforehand made the whole thing feel so much less daunting, especially since this was our first Maine Coon.",
    ],
  },
  {
    name: "Ben H.",
    rating: 5,
    text: [
      "Professional and easy to deal with from the very first enquiry through to collection. Our kitten is healthy, confident and bursting with personality.",
    ],
  },
  {
    name: "Isabella",
    rating: 5,
    text: [
      "We couldn't be happier with our Maine Coon. From the first enquiry to bringing him home, everything was handled with genuine care and clear communication.",
      "He arrived so confident and already comfortable around people. You can tell he'd had plenty of gentle handling and patience from day one.",
    ],
  },
  {
    name: "Thomas",
    rating: 4.5,
    text: [
      "Our girl has the sweetest temperament, playful, gentle and endlessly affectionate. You can tell she was raised in a genuinely loving environment.",
    ],
  },
  {
    name: "Sophie L.",
    rating: 5,
    text: [
      "The whole process felt smooth and reassuring. We had plenty of information before collection and never once felt rushed or unsure.",
      "Our kitten settled in almost immediately and is already such a loved part of the family. She's confident, curious and has exactly the kind of personality we were hoping for in a Maine Coon.",
    ],
  },
  {
    name: "Jack",
    rating: 3.5,
    text: [
      "We'd been searching for the right Maine Coon breeder for a while and were so glad we found this one. Our boy is stunning, but what matters most is how relaxed, social and sweet-natured he is.",
      "Getting updates while he was growing up was lovely, and by the time we brought him home we already felt connected to him and had a good sense of his personality.",
    ],
  },
];

export function getReviews(): Review[] {
  return reviews;
}
