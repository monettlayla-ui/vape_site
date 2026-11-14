export type BlogBlock = { type: "p"; text: string } | { type: "list"; items: string[] };

export type BlogSection = {
  heading: string;
  blocks: BlogBlock[];
};

export type BlogPost = {
  slug: string;
  title: string;
  postedDate: string;
  heroImage: string;
  intro: string[];
  sections: BlogSection[];
  finalThought: string;
};

function p(text: string): BlogBlock {
  return { type: "p", text };
}

function list(items: string[]): BlogBlock {
  return { type: "list", items };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-some-breeders-dont-offer-visits",
    title:
      "Why Some Breeders Don't Offer Visits (Health, Biosecurity, and Peace of Mind)",
    postedDate: "13th February, 2026",
    heroImage: "/categories/current-litters/products/miso/images/01.jpg",
    intro: [
      `One of the most common questions buyers ask is, "Can we visit the kittens first?" It's a fair question. People want reassurance and they want to feel confident in the breeder and the kitten.`,
      "At the same time, many breeders do not allow visits, and there are sensible reasons for that.",
    ],
    sections: [
      {
        heading: "Kittens have developing immune systems",
        blocks: [
          p(
            "Young kittens are more vulnerable to illness. Even well-meaning visitors can unknowingly bring bacteria or viruses on clothing, hands or shoes. What is a minor bug to an adult cat can be harder on a kitten."
          ),
        ],
      },
      {
        heading: "Biosecurity reduces risk for everyone",
        blocks: [
          p(
            "Breeders may have multiple cats and litters in one environment. Biosecurity is about reducing exposure, which protects:"
          ),
          list([
            "the kittens",
            "the adult cats",
            "your future kitten's health before they come home",
          ]),
          p("A single illness can spread quickly in a multi-cat environment."),
        ],
      },
      {
        heading: "Stress matters too",
        blocks: [
          p(
            "Visitors, unfamiliar sounds, and lots of handling can create stress. A stable routine and calm environment supports healthier development and better social confidence. Many breeders prefer to keep early handling consistent and controlled."
          ),
        ],
      },
      {
        heading: "How buyers can still feel confident",
        blocks: [
          p(
            "A breeder who does not offer visits should still provide transparency in other ways, such as:"
          ),
          list([
            "clear communication",
            "photos and updates",
            "video calls or FaceTime",
            "the ability to answer detailed questions",
          ]),
          p(
            "In many cases, this gives buyers reassurance without increasing health risks."
          ),
        ],
      },
      {
        heading: "The bottom line",
        blocks: [
          p(
            `A closed cattery does not automatically mean "secretive". Often it means the breeder is prioritising health, routine and low-stress development. The real question is whether the breeder provides clear information and is willing to communicate properly.`
          ),
        ],
      },
    ],
    finalThought:
      "It's normal to want to see where your kitten is raised. A good breeder will help you feel confident through updates and open communication, while still protecting the health of the cats in their care.",
  },
  {
    slug: "pedigree-papers-microchips-and-vet-books",
    title:
      "Pedigree Papers, Microchips, and Vet Books: What You Should Receive",
    postedDate: "13th February, 2026",
    heroImage: "/categories/current-litters/products/valerian/images/01.jpg",
    intro: [
      "When you're buying a Maine Coon kitten, photos can make you fall in love. Paperwork is what confirms the details and protects you long-term. If you are comparing breeders, what you receive with your kitten is one of the clearest signs of a well-run program.",
      "Here's what you should expect to receive when your kitten comes home.",
    ],
    sections: [
      {
        heading: "Vet records (vet book)",
        blocks: [
          p(
            "Your kitten should come with their veterinary records, which typically include:"
          ),
          list([
            "Vaccinations to date",
            "Parasite treatments (internal and external)",
            "Notes from health checks, if applicable",
          ]),
          p(
            "These records help your vet continue care properly and keep everything consistent during the first year."
          ),
        ],
      },
      {
        heading: "Microchip and transfer paperwork",
        blocks: [
          p("Microchipping is about identification and safety. You should receive:"),
          list([
            "The microchip number",
            "The paperwork or instructions required to transfer the microchip into your name",
          ]),
          p(
            "Make sure you complete the transfer promptly. Accurate details can make a difference if your cat is ever lost."
          ),
        ],
      },
      {
        heading: "Pedigree papers",
        blocks: [
          p(
            "Pedigree papers document your kitten's registered lineage. If you are purchasing a pedigree kitten, these papers matter because they confirm the kitten's registered status and background."
          ),
        ],
      },
      {
        heading: "What about registration?",
        blocks: [
          p(
            "If the breeder is registered, they should be able to tell you which association they are registered with and what documentation they provide for each kitten."
          ),
        ],
      },
      {
        heading: "A simple buyer checklist",
        blocks: [
          p("Before you commit, ask:"),
          list([
            "Will I receive vet records and vaccination details?",
            "Will I receive microchip transfer documentation?",
            "Will I receive pedigree papers?",
          ]),
          p("Clear answers are a good sign. Vague answers usually are not."),
        ],
      },
    ],
    finalThought:
      "Buying a kitten is emotional, but the paperwork is practical. It protects you, it protects the kitten, and it shows the breeder takes the process seriously.",
  },
  {
    slug: "common-buyer-questions-before-you-enquire",
    title:
      "Common Buyer Questions Before You Enquire (and the Answers That Matter)",
    postedDate: "13th February, 2026",
    heroImage: "/categories/studs/products/blanco/images/01.jpg",
    intro: [
      "Buying a pedigree kitten is exciting, but it's also a decision worth slowing down for. A good breeder will welcome questions, and the right questions will save you time, stress, and disappointment.",
      "Here are the buyer questions that actually matter, and why they matter.",
    ],
    sections: [
      {
        heading: "1) Are kittens placed as pets only?",
        blocks: [
          p(
            "This tells you whether the breeder is placing kittens as companions rather than breeding stock. It also helps set expectations from the start."
          ),
        ],
      },
      {
        heading: "2) What vet work is done before the kitten goes home?",
        blocks: [
          p(
            "You want clarity on what your kitten has already received, and what you will need to continue. Ask about vet registration, vaccinations and parasite treatments, and ensure you will receive the records."
          ),
        ],
      },
      {
        heading: "3) What paperwork comes with the kitten?",
        blocks: [
          p(
            "For pedigree kittens, paperwork is not an optional extra. Ask what you will receive and when. At minimum you should understand whether pedigree papers and microchip transfer documentation are provided, along with vet records."
          ),
        ],
      },
      {
        heading: "4) How are the kittens raised?",
        blocks: [
          p(
            "This is about temperament and adaptability. Kittens raised in a family environment with normal household activity are often more confident and easier to settle."
          ),
        ],
      },
      {
        heading: "5) Do you ever have older kittens available?",
        blocks: [
          p(
            "Some breeders occasionally have kittens available at various ages, including over 14 weeks. Older kittens can be a great option for some families, especially those wanting a slightly more settled stage."
          ),
        ],
      },
      {
        heading: "6) Can we visit the cattery?",
        blocks: [
          p(
            "Not all breeders offer visits, and that is not automatically a red flag. The more important question is what they do instead, such as updates and video calls, and how they handle biosecurity."
          ),
        ],
      },
      {
        heading: "7) What support is available after the kitten comes home?",
        blocks: [
          p(
            "A good breeder does not disappear the moment the kitten leaves. Ask whether you can contact them with questions during the settling-in period."
          ),
        ],
      },
    ],
    finalThought:
      "The best buyers are not the fastest buyers. Ask the questions that reveal standards, transparency and care. When the answers are clear, choosing the right kitten becomes much easier.",
  },
  {
    slug: "bringing-home-a-maine-coon-kitten-checklist",
    title: "Bringing Home a Maine Coon Kitten: A Practical Checklist",
    postedDate: "13th February, 2026",
    heroImage: "/categories/queens/products/chloe/images/01.jpg",
    intro: [
      "Bringing home a Maine Coon kitten is exciting, and a little chaotic in the best way. A bit of preparation makes the first week smoother for you and much calmer for your kitten.",
      "Maine Coons are a large, slow-maturing breed. They stay kitten-like for years, which is part of their charm. It also means they benefit from sturdy gear, safe spaces, steady routines, and calm leadership in the early days.",
    ],
    sections: [
      {
        heading: `1) Set up a quiet "home base"`,
        blocks: [
          p(
            "Before your kitten arrives, choose one room as their safe zone for the first 24 to 72 hours. A spare bedroom, office, or quiet lounge corner works well. This space should include:"
          ),
          list([
            "Litter tray",
            "Food and water",
            "A bed or enclosed hideaway",
            "A scratching post",
            "A few toys",
          ]),
          p(
            "Keeping the first space small helps your kitten feel secure and reduces the chance of toilet accidents while they learn the layout of your home."
          ),
          p(
            "It's also completely normal for a kitten to hide during the first few days. Maine Coons are intelligent and observant. Some will confidently explore straight away, while others prefer to sit back and assess their new environment before fully engaging."
          ),
          p("Allow them to observe, but gently encourage connection."),
        ],
      },
      {
        heading: "2) Gentle bonding from day one",
        blocks: [
          p(
            "Your kitten may not immediately run into your arms, and that's okay. They've just left their mother, littermates and familiar surroundings."
          ),
          p(
            "Calm, confident interaction is important. Pick your kitten up gently and hold them securely on your lap or beside you on the couch. Speak softly. Stroke under the chin, around the ears and along the back. If they try to wriggle away immediately, calmly hold them for a short moment before letting them go."
          ),
          p(
            "This isn't about forcing affection, it's about teaching your kitten that human contact is safe, warm and reassuring. Short, positive cuddle sessions repeated regularly in the first few weeks help build a confident, bonded companion."
          ),
          p("Consistency creates security."),
        ],
      },
      {
        heading: "3) Choose the right litter tray size",
        blocks: [
          p(
            "Maine Coons grow quickly, and a tiny tray becomes frustrating fast. Start with a tray that allows your kitten to turn around comfortably. If you already own a standard tray, it's fine short-term, but plan to upgrade."
          ),
          p("Tip: Keep the tray away from noisy appliances and separate from food and water."),
        ],
      },
      {
        heading: "4) Stick with a familiar diet at first",
        blocks: [
          p(
            "A new home is a major change. Switching food at the same time can cause stomach upsets. Keep your kitten on the same diet initially, then introduce changes gradually if needed."
          ),
          p("If you're unsure what to feed long-term, keep it simple:"),
          list([
            "A consistent, quality kitten food",
            "Fresh water available at all times",
            "Treats used for training and bonding, not as meals",
          ]),
        ],
      },
      {
        heading: "5) Temperature and comfort matter",
        blocks: [
          p(
            "Maine Coons have thick coats, so comfort is important year-round. Make sure your kitten has a cool resting spot in warmer weather and a cosy, draft-free space in cooler months. Good airflow, shade and access to fresh water make a big difference."
          ),
          p("A simple rule is this: if you're uncomfortable, your kitten probably is too."),
        ],
      },
      {
        heading: `6) Make your home "kitten-proof"`,
        blocks: [
          p("Maine Coons are curious and clever. They can reach more than you expect."),
          list([
            "Secure balcony access and window screens",
            "Put away string, ribbons, hair ties and small chewable items",
            "Hide power cords where possible",
            "Remove toxic plants",
          ]),
          p(
            "If you're not sure about a plant or household item, treat it as unsafe until confirmed otherwise."
          ),
        ],
      },
      {
        heading: "7) Emotional environment matters",
        blocks: [
          p(
            "Kittens are sensitive to their surroundings. They respond strongly to tone, body language and overall atmosphere."
          ),
          p(
            "If the home feels calm and predictable, your kitten will settle faster. If the environment feels tense or inconsistent, settling may take longer."
          ),
          p(
            "While pets bring comfort and companionship, they are not a solution to life's challenges. A kitten needs stability, patience and confident guidance in order to thrive."
          ),
          p("The more steady and grounded you are, the more secure your kitten will feel."),
        ],
      },
      {
        heading: "8) Introductions to other pets should be slow",
        blocks: [
          p(
            "Even friendly pets need careful introductions. Start with scent swapping (blankets or bedding), then move to short supervised meetings. Keep sessions calm and positive, and end before anyone becomes overwhelmed."
          ),
          p("Rushing introductions can create stress that takes weeks to undo."),
        ],
      },
      {
        heading: "9) The first night, keep it simple",
        blocks: [
          p(
            "Your kitten may cry on the first night. That's normal. Keep them in their safe room with a comfortable bed and a familiar-smelling blanket if you have one. A predictable routine and quiet reassurance matter more than constant fussing."
          ),
        ],
      },
      {
        heading: "10) When to contact your vet",
        blocks: [
          p(
            "If your kitten is not eating at all for more than a day, is lethargic, or has ongoing diarrhoea, contact a vet. A mild dip in appetite on day one can happen, but kittens should bounce back quickly once they feel secure."
          ),
        ],
      },
    ],
    finalThought:
      "The goal is a calm start and a confident kitten. Set up the basics, keep routines steady, and give your kitten time to learn their new world. The bond builds quickly once they realise they're safe, and home.",
  },
  {
    slug: "maine-coon-growth-stages",
    title: "Maine Coon Growth Stages: From Kitten to Adult (4 to 5 Years)",
    postedDate: "13th February, 2026",
    heroImage: "/categories/current-litters/products/blue-boy/images/01.jpg",
    intro: [
      `People new to the breed often expect a "fully grown cat" at 12 months. Maine Coons laugh at that schedule.`,
      "Maine Coons typically mature over 4 to 5 years. That slow growth is one reason they become such impressive adults.",
    ],
    sections: [
      {
        heading: "3 to 6 months",
        blocks: [
          p(
            "This is peak kitten energy. They are learning the house rules, developing confidence, and building coordination. Routine and gentle training are easiest here."
          ),
        ],
      },
      {
        heading: "6 to 12 months",
        blocks: [
          p(
            "You'll notice bigger paws, longer bodies, and a more confident personality. Many kittens become more social as they grow, especially when they feel secure in the home."
          ),
        ],
      },
      {
        heading: "1 to 2 years",
        blocks: [
          p(
            "They look big, but they're not finished. You may see more muscle development, thicker coats, and a calmer temperament, especially once routine is established."
          ),
        ],
      },
      {
        heading: "2 to 4 years",
        blocks: [
          p(
            `This is where the "gentle giant" reputation really shows. Many Maine Coons become more settled and affectionate, with the full coat and body structure developing further.`
          ),
        ],
      },
      {
        heading: "4 to 5 years",
        blocks: [
          p("Adult maturity. You often see the final coat fullness and overall build settle into its long-term look."),
        ],
      },
    ],
    finalThought:
      "If you're searching for Maine Coon kittens for sale in Australia, it helps to understand what you are actually buying. You're not just bringing home a kitten. You're watching a slow, beautiful transformation into a truly impressive adult cat.",
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
