export type FaqAnswerBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; href: string };

export type Faq = {
  question: string;
  answer: string | FaqAnswerBlock[];
};

export type FaqCategory = {
  title: string;
  faqs: Faq[];
  note?: string;
};

function p(text: string): FaqAnswerBlock {
  return { type: "p", text };
}

function list(items: string[]): FaqAnswerBlock {
  return { type: "list", items };
}

function link(text: string, href: string): FaqAnswerBlock {
  return { type: "link", text, href };
}

export const faqCategories: FaqCategory[] = [
  {
    title: "Purchasing & Process",
    faqs: [
      {
        question: "How much are your kittens?",
        answer:
          "Our current pricing is available upon enquiry. Prices are very competitive compared to the quality and reflect the health testing, care, and professional standards we maintain. Contact us for up-to-date details and availability. Certain colors and genetic mutations such as blue eyes, polydactyl, merle (not yet club recognised) are more rare than others and priced slightly higher.",
      },
      {
        question: "What does the cost include?",
        answer:
          "The price of a kitten includes microchipping, veterinary registration, age-appropriate vaccinations, internal and external parasite treatments (worms, fleas and ticks), desexing prior to rehoming, and pedigree paperwork. The pedigree paperwork will be sent to you at a later date once the litter registration has been completed and forwarded to us, and then posted on to you.",
      },
      {
        question: "What is the reservation process?",
        answer:
          "To reserve a kitten, we require a non-refundable deposit. This holds your chosen kitten until it is ready to go home. Once you have placed a deposit, we will confirm all details and timelines. We also require our contract to be signed, which outlines your obligations to the kitten and our responsibilities in raising the kitten until it goes home. The contract also includes a warranty.",
      },
      {
        question: "Do I need to pay a deposit? Is it refundable?",
        answer:
          "Yes, a deposit is required to reserve a kitten. The deposit is non-refundable but is applied towards your kitten's total purchase price. If your financial circumstances change, your deposit may be transferred to a future kitten once your circumstances improve. At that time, you may choose a new kitten and the deposit will be applied accordingly. We require screenshots of all transactions for our records.",
      },
      {
        question: "At what age can kittens go to their new homes?",
        answer:
          "Our kittens are placed in pet homes only after desexing and appropriate vaccinations, and once they are developmentally ready. This is typically around 12-14+ weeks of age to ensure proper socialisation, confidence and health stability. We provide contact details for our reputable courier service upon deposit or purchase for interstate or international clients.",
      },
      {
        question: "Do you ever have older kittens available?",
        answer:
          "Yes. Occasionally we have kittens over 14 weeks available. These older kittens are affectionate, confident, and often more settled.",
      },
    ],
  },
  {
    title: "Health, Welfare & Screening",
    faqs: [
      {
        question: "Are your breeding cats DNA tested?",
        answer:
          "Yes. Our studs and queens undergo DNA testing and are clear (n/n) for MYBPC (heart disease), PKD1 (kidney disease), PKLR (blood/liver related disease), and LIX1 (SMA). They also receive routine veterinary examinations and vaccination boosters.",
      },
      {
        question: "What health care do kittens receive before going home?",
        answer: [
          p("Kittens receive:"),
          list([
            "Veterinary health checks",
            "Age-appropriate vaccinations",
            "Internal and external parasite treatment",
            "Microchipping and vet registration",
          ]),
          p("You will receive all relevant records with your kitten."),
        ],
      },
      {
        question: "Do kittens come with pedigree papers?",
        answer:
          "Yes. Every pedigree kitten is provided with official registration paperwork and pedigree documentation.",
      },
      {
        question: "What common household items are poisonous to cats?",
        answer: [
          p(
            "Many everyday household products and plants can be toxic to cats, including Maine Coons. Because they groom themselves frequently and are naturally curious, even small exposures can cause serious illness."
          ),
          p("Common hazards include:"),
          list([
            "Foods such as garlic, onion, chocolate, grapes, caffeine, alcohol and heavily seasoned takeaway foods",
            "Artificial sweeteners such as xylitol",
            "Essential oils and diffusers, especially tea tree, eucalyptus and concentrated lavender oils",
            "Air fresheners, incense, scented sprays and potpourri",
            "Cleaning chemicals, disinfectants and bleach-based products",
            "Lilies (extremely toxic), peace lilies and certain other indoor plants",
            "Antifreeze and automotive fluids",
            "Rodent bait and insecticides",
            "Flea treatments designed for dogs",
            "Certain human medications, including paracetamol and ibuprofen",
            "Mothballs and strong chemical repellents",
          ]),
          p(
            "Never allow your kitten to consume human food or leftovers. Even small amounts of some ingredients can be dangerous."
          ),
          p(
            "If you are unsure about a product or plant in your home, check with your veterinarian before exposing your kitten to it. When in doubt, keep it safely out of reach."
          ),
          p("For further information on common household dangers, you may find this resource helpful:"),
          link(
            "https://www.communityconcernforcats.org/resources/danger-list/",
            "https://www.communityconcernforcats.org/resources/danger-list/"
          ),
        ],
      },
    ],
  },
  {
    title: "Photo Updates & Expectations",
    faqs: [
      {
        question: "Do you provide regular photos of the kittens?",
        answer: [
          p("We provide photo updates at **key developmental stages**:"),
          list(["Birth – 2 weeks (1 set)", "4 – 6 weeks (1 set)", "8 – 12 weeks (1 set)"]),
          p(
            "These stages reflect noticeable changes in development. While we understand the desire for frequent photos, **additional photo requests are provided as a courtesy when time allows**. Our priority is the health and wellbeing of the kittens in our care. This approach ensures that we maintain stable routines and a calm environment. 1 set may consist of a few snap shots and maybe 1 or 2 short videos."
          ),
        ],
      },
      {
        question: "Why aren't photos sent every day?",
        answer:
          "Raising kittens is hands-on work from birth to rehoming — feeding, cleaning, health checks and monitoring take priority. Routine photos are supplied at the key stages above to capture meaningful developmental changes. Photo shoots consist of full days of 8 hours plus.",
      },
    ],
  },
  {
    title: "Socialisation & Environment",
    faqs: [
      {
        question: "Are kittens handled and socialised?",
        answer:
          "Yes. Our kittens are raised in our family home and handled regularly to build confidence and familiarity with people. They are exposed to normal household activity to help them settle well into new homes.",
      },
      {
        question: "My kitten isn't eating the food you recommended - is that normal?",
        answer:
          "Yes. Some kittens may be hesitant to eat in a new environment. Keep food available in a quiet space and continue the diet recommended. It is the exact food we raised your kitten on; they are introduced to solids and toilets around 3-4 weeks of age. Appetite typically returns within a day or two. Rehoming can be stressful. Continue to cuddle your kitten and spend time to speed the stress period.",
      },
      {
        question: "My kitten's stools are loose — what should I do?",
        answer:
          "Loose stools can be due to stress, diet changes, or environmental adjustment. Stick to the diet provided and monitor closely. If symptoms persist or worsen, contact your veterinarian.",
      },
      {
        question: "Is it normal for my kitten to hide when settling in?",
        answer: [
          p(
            "Yes. It's completely normal for a kitten to hide or spend time quietly observing during the first few days in a new home. Maine Coons are intelligent and very aware of their surroundings. Some are little overthinkers who like to sit back and assess everything first. Others are complete dufouses who charge in without a second thought. Both personalities are perfectly normal."
          ),
          p(
            "Allow your kitten some quiet time to observe and feel secure, but also begin gentle, confident interaction from day one."
          ),
          p(
            "Regular, calm handling helps build trust. Pick your kitten up gently and hold them securely on your lap or beside you. Speak softly and stroke under the chin, around the ears and along the back. Even if your kitten initially wants to wriggle away, short and positive cuddle sessions help teach them that human contact is safe, warm and reassuring."
          ),
          p(
            "During the first few weeks, consistent and confident affection plays a key role in developing a calm, bonded and well-adjusted companion."
          ),
        ],
      },
    ],
  },
  {
    title: "Visits & Transport",
    faqs: [
      {
        question: "Can I visit the cattery and meet the kittens?",
        answer: [
          p(
            "No. For the health, safety and wellbeing of our kittens, we do not offer cattery visits, kitten viewing appointments or in-person meet-and-greet sessions."
          ),
          p(
            "Our kittens are raised in a calm, carefully managed environment, and unnecessary visitors can create stress and biosecurity risks. We provide detailed photographs, videos, temperament information and personal guidance to help you make an informed decision."
          ),
          p(
            "We appreciate your understanding and ask that you do not request an exception to this policy."
          ),
        ],
      },
      {
        question: "Do you offer transport for interstate buyers?",
        answer:
          "Yes — we work with trusted pet transport providers to assist with safe and reliable nationwide delivery. We will guide you through options, timing, and what to expect on delivery day.",
      },
    ],
  },
  {
    title: "Breed Information",
    faqs: [
      {
        question: "How big do Maine Coons get?",
        answer:
          "Maine Coons are one of the largest domestic cat breeds. They continue growing beyond 12 months and may take 4–5 years to reach full maturity. Their size, coat and build develop gradually.",
      },
      {
        question: "How long do Maine Coons live?",
        answer:
          "With proper care, Maine Coons typically live 12–15 years, and many live longer. Regular veterinary care, a quality diet, and a secure environment all contribute to longevity.",
      },
      {
        question: "Are Maine Coons good with children?",
        answer:
          "When raised and handled properly, Maine Coons are typically patient and tolerant. As with any breed, respectful handling and supervision around young children is important.",
      },
      {
        question: "Do Maine Coons get along with dogs?",
        answer:
          "Many Maine Coons adapt well to homes with dogs, especially when introductions are gradual and calm. Their confident and social temperament often helps with multi-pet households.",
      },
      {
        question: "Are Maine Coons indoor or outdoor cats?",
        answer:
          "Maine Coons should be kept indoors or within secure outdoor enclosures such as catios. This protects them from injury, disease and theft, and ensures their safety long term.",
      },
      {
        question: "Do Maine Coons require a lot of grooming?",
        answer:
          "Maine Coons have a long, dense coat that benefits from regular brushing, typically 2–3 times per week. During seasonal coat changes, more frequent grooming may be required.",
      },
      {
        question: "Do Maine Coons shed a lot?",
        answer:
          "They do shed, particularly during seasonal transitions. Regular grooming helps manage loose fur and reduces hairballs.",
      },
      {
        question: "Are Maine Coons vocal?",
        answer:
          "Maine Coons are known for their soft chirps and trills rather than loud, constant meowing. Many owners describe them as communicative but not noisy.",
      },
      {
        question: "Are Maine Coons very active?",
        answer:
          "They are playful and intelligent, especially in kitten and young adult stages. They enjoy climbing, interactive toys and mental stimulation, but they also settle into calm companionship as they mature.",
      },
      {
        question: "Do Maine Coons need special food?",
        answer:
          "Yes, they definitely do. We advise you on a recommended diet. This should be followed and maintained to ensure maximum potential growth and health. And also, to avoid health issues. Any dietary changes must be a gradual introduction over time in addition to their regular diet. You should never let your kitten eat your food definitely not takeaway foods. Some spices and garlic, etc. are very poisonous as are potpourri and air sprays. Lavender is common one there are many.",
      },
      {
        question: "Why are Maine Coons more expensive than some other breeds?",
        answer:
          "The cost reflects responsible breeding practices, health testing, veterinary care, time investment and proper early development. Ethical breeding requires significant resources and commitment.",
      },
    ],
  },
  {
    title: "General Questions",
    faqs: [
      {
        question: "What support do you offer after adoption?",
        answer:
          "We are happy to provide ongoing support and advice as your kitten settles into your home. Feel free to contact us with questions about care, behaviour or health.",
      },
      {
        question: "How do I express interest in a kitten?",
        answer: [
          p("Send us a message with:"),
          list([
            "Which kitten(s) you're enquiring about",
            "Your location",
            "Your household setup (kids, pets, work hours)",
          ]),
          p("We'll guide you through current availability and next steps."),
        ],
      },
    ],
    note: "We update this FAQ regularly as new questions come up. If you're genuinely interested in a beautiful kitten and would like to know what is currently available, please send us a message and we can communicate further.",
  },
];

export function faqAnswerToText(answer: Faq["answer"]): string {
  if (typeof answer === "string") return answer;

  return answer
    .map((block) => {
      if (block.type === "p") return block.text;
      if (block.type === "link") return block.href;
      return block.items.join(", ");
    })
    .join(" ");
}
