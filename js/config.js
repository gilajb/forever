/* ==========================================================================
   FOR KAIOR — ALL THE PERSONAL CONTENT LIVES HERE
   Edit the text between the quotes. You never need to touch main.js,
   style.css or index.html to change words, photos or songs.

   Tips:
   - Keep the quote marks and commas exactly as they are.
   - Text inside backticks (`like this`) can run over several lines.
   - If the text itself needs a double quote, write it as \" .
   ========================================================================== */

window.SITE_CONFIG = {

  /* ---------- Names ---------- */
  names: {
    from: "Raha",
    to: "Kaior"
  },

  /* ---------- The day we became official ----------
     This drives the lock screen answer AND every "days together" counter. */
  anniversary: { day: 29, month: 4, year: 2025 },

  /* ---------- 1. Lock screen ---------- */
  gate: {
    greeting: "Hey Kaior,",
    title: "enter our special date to unlock your surprise",
    placeholder: "DD / MM / YYYY",
    button: "Unlock",
    note: "Slashes are optional. I'm strict about love, not punctuation.",
    hintButton: "Need a hint?",
    hint: "The day we made it official",
    success: "That's the one. Come in, sweetheart.",
    empty: "You have to actually type something, sweetheart.",
    wrongMessages: [
      "Not quite, Kaior. Think harder, this is a test of love.",
      "Wrong again. I'm not mad, just disappointed. (Kidding. Try again.)",
      "Sweetheart. Sweetheart. You know this one.",
      "Still no. The doves are judging you a little.",
      "Okay, press the hint button. I won't tell anyone."
    ]
  },

  /* ---------- 2. Loading screen ---------- */
  loader: {
    top: "Counting our",
    text: "days of choosing each other",
    messages: [
      "Counting every single one...",
      "Yes, even the days you annoyed me...",
      "Carrying the one...",
      "Almost there, sweetheart..."
    ],
    done: "And I'd choose you again tomorrow."
  },

  /* ---------- 3. Hero ---------- */
  hero: {
    kicker: "Happy Boyfriend's Day,",
    name: "Kaior",
    subtitle: "To my best friend, my safe place and my favourite person. This little corner of the internet is all yours.",
    counterLabel: "Together for",
    scroll: "Scroll, there's more"
  },

  /* ---------- 4. Our story ---------- */
  storyHeading: { script: "how we got here", title: "Our Story" },
  story: [
    {
      label: "Chapter one",
      title: "The boy who kept asking",
      text: "Before I even knew your name, you had already noticed me. You'd see me around and ask your friends, \"Who is that?\" I had no idea someone was quietly paying attention. Honestly? Great taste."
    },
    {
      label: "Chapter two",
      title: "One little story reply",
      text: "You found my Instagram and we followed each other. Then I commented on one of your stories. I don't even remember which one! That tiny, forgettable comment turned out to be the best thing I ever typed, because we started talking and never really stopped."
    },
    {
      label: "Chapter three",
      title: "Best friends first",
      text: "For over a year, you were my best friend. You were there through the times other people hurt me, and you helped me put myself back together. You had a crush on me the whole time, and still you respected everything. You never pushed. You never made it weird. Quiet, patient love. I see it so clearly now."
    },
    {
      label: "Chapter four",
      title: "When the feelings got heavy",
      text: "Here is my confession: I liked you back then too. But I was in a relationship, and I didn't want to cross that line. Later, when I was single and had taken some time for myself, we grew closer, and my feelings got too heavy to keep to myself. Yours turned out to be just as real."
    },
    {
      label: "29 April 2025",
      title: "Officially us",
      text: "Right before you went back to school, we made it official. No more almost, no more maybe. Just you and me, sweetheart, choosing each other. Best decision I have ever made."
    }
  ],

  /* ---------- 5. Memories gallery ----------
     One entry per card.
       title   : shown on the card
       date    : optional, leave "" for no date
       caption : the little line under the title
       image   : file name inside assets/images/
       icon    : emoji shown until that photo file exists (or leave image as ""
                 to keep it an emoji card forever)
     To add a memory, copy one { ... } block, paste it, and change the text. */
  galleryHeading: { script: "places we've been, trouble we've caused", title: "Memories" },
  imageFolder: "assets/images/",
  gallery: [
    {
      title: "ITA Conference",
      date: "22 to 26 June 2026",
      caption: "Five whole days, and you were still my favourite part.",
      image: "memory-1.jpg",
      icon: "🎤"
    },
    {
      title: "Eating in the car together",
      date: "9 July 2026",
      caption: "Five star dining. The ambience? Your dashboard.",
      image: "memory-2.jpg",
      icon: "🍟"
    },
    {
      title: "The arcade",
      date: "23 September 2026",
      caption: "YOU LOST THE BOXING THING BTW. Rematch?",
      image: "memory-3.jpg",
      icon: "🕹️"
    },
    {
      title: "The Airbnb",
      date: "28 September 2026",
      caption: "A little place that was just ours for a while.",
      image: "memory-4.jpg",
      icon: "🏡"
    },
    {
      title: "Uhuru Park picnic",
      date: "24 July 2026",
      caption: "Grass, snacks and my favourite person. Perfect day.",
      image: "memory-5.jpg",
      icon: "🧺"
    },
    {
      title: "Uhuru Park bike riding",
      date: "13 July 2026",
      caption: "We survived. Barely. Mostly me.",
      image: "memory-6.jpg",
      icon: "🚲"
    },
    {
      title: "Taking me to pierce my ears",
      date: "27 April 2026 idk",
      caption: "You held my hand. I pretended to be brave.",
      image: "memory-7.jpg",
      icon: "💎"
    },
    {
      title: "My first matatu ride with you",
      date: "",
      caption: "Loud music, zero personal space, and you beside me. 10/10.",
      image: "memory-8.jpg",
      icon: "🚐"
    },
    {
      title: "The Audi pics",
      date: "",
      caption: "We did it for the plot.",
      image: "memory-9.jpg",
      icon: "📸"
    },
    {
      title: "Sneaking out in our parents' cars",
      date: "",
      caption: "Rushing home before anyone noticed, and you picking me up from school. This card self-destructs if our parents see it.",
      image: "memory-10.jpg",
      icon: "🚗"
    },
    {
      title: "Me, at your house, again",
      date: "",
      caption: "More often than not. At this point I should be paying rent.",
      image: "memory-11.jpg",
      icon: "🛋️"
    },
    {
      title: "Our late night calls",
      date: "",
      caption: "\"I love you more.\" \"No, I love you more than you love me.\" Repeat until sunrise.",
      image: "memory-12.jpg",
      icon: "🌙"
    }
  ],

  /* ---------- 6. Reasons I love you ----------
     Add, remove or reorder freely. One reason per line, in quotes, with a comma after. */
  reasonsHeading: { script: "there's a list, obviously", title: "Reasons I Love You" },
  reasonsIntro: "Tap the card, sweetheart. I came prepared.",
  reasonsButton: "Show me another reason",
  reasonsButtonFirst: "Show me a reason",
  reasonsButtonAgain: "Start again, I could go forever",
  reasons: [
    "You're patient with me, even on the days I'm a whole puzzle with missing pieces.",
    "You respected me long before you ever had me. You never made it weird, not even once.",
    "You helped me heal from things you didn't break.",
    "You were my best friend first, and you still are. The boyfriend part is a very nice bonus.",
    "The way you light up when you're gaming. I've accepted that I share you with COD Mobile and eFootball. (I still win.)",
    "Your legs. Yes, your legs. I said what I said.",
    "How you rush to collect me like I'm an urgent delivery that cannot be late.",
    "Your house feels like the safest place in the world. Which is why I basically live there.",
    "Our late night calls, where \"five more minutes\" is the biggest lie we both tell.",
    "You call me baby, and somehow it still gets me every single time.",
    "You never gave up on me, even when I made it hard.",
    "You're you, sweetheart. That's the whole reason."
  ],

  /* ---------- 7. Our songs ----------
     Put the mp3 files in assets/audio/ using exactly these file names
     (or change "file" below to match your file names). The first song
     starts playing right after he unlocks the site. */
  songsHeading: { script: "press play", title: "Our Songs" },
  songs: [
    {
      title: "Raindance",
      artist: "Dave & Tems",
      note: "This one sounds like us: easy, warm and a little bit of a vibe. Every time it plays, I'm right back next to you.",
      file: "assets/audio/raindance.mp3"
    },
    {
      title: "Superpowers",
      artist: "Daniel Caesar",
      note: "Because loving you makes me feel like I have some. And honestly, so do you.",
      file: "assets/audio/superpowers.mp3"
    },
    {
      title: "Forever Ever",
      artist: "Trouble ft. Young Thug & Reese LAFLARE",
      note: "It is right there in the name. That is the plan, sweetheart.",
      file: "assets/audio/forever-ever.mp3"
    }
  ],
  music: {
    startVolume: 0.6,
    missing: "Add the audio file to hear this one",
    tapToPlay: "Tap to play",
    nowPlaying: "Now playing",
    paused: "Paused"
  },

  /* ---------- 8. THE LOVE LETTER ----------
     >>> This is the one to personalise. <<<
     Leave an empty line between paragraphs. */
  letterHeading: { script: "read this one slowly", title: "A Letter For You" },
  letter: {
    envelopeLabel: "Open me, Kaior",
    skip: "Skip the suspense",
    greeting: "My sweetheart,",
    body: `
I have started this letter about ten times, because how do I fit you into a few paragraphs? So I'll begin with the simplest thing: thank you. Thank you for loving me, for being patient with me, and for never giving up on me, even on the days I gave you every reason to.

I know I have almost broken us more than once. I have made mistakes, and I have been difficult to love. You stayed anyway. I don't take that lightly, and I never will.

So please hear this clearly: you do not have to worry. I am not going anywhere. I choose you, today and on the hard days too, and I am working on being better for us. Not because you asked me to, but because you deserve it.

You are safe with me. You are loved, loudly and completely. And I am so proud of you, of the man you are and the man you are becoming.

You were my best friend before you were my boyfriend, and somehow you are still both. That is my favourite thing about us.

Happy Boyfriend's Day, sweetheart. Now come collect your baby, I miss you. And yes, I am still thinking about your legs.
`,
    signoff: "Forever yours,",
    signature: "Raha"
  },

  /* ---------- 9. Surprise ---------- */
  surpriseHeading: { script: "one last thing", title: "Your Surprise" },
  surprise: {
    button: "Press me, Kaior",
    buttonAgain: "More confetti, please",
    tease: "Go on. You know you want to.",
    couponLabel: "Official coupon",
    couponText: "One free make out session (ik you love them), holistically planned by Raha, redeemable forever 😉",
    couponFine: "No expiry date. No terms and conditions. Non-transferable, obviously."
  },

  /* ---------- 10. Footer ---------- */
  footer: {
    line: "Made with love by Raha, for Kaior",
    date: "Boyfriend's Day, 3 October 2026",
    daysSuffix: "days together and counting"
  }
};
