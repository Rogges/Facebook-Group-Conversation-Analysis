/*
var click_polarity, text1, text2;
click_polarity = 0;
text1 = "Thannoj, Kishan, Harris, and Javed";
text2 = document.querySelector('#rogges').textContent;

document.querySelector("#rogges").addEventListener('click', function() {
    if (click_polarity == 0) {
        document.querySelector('#rogges.text1').textContent = text1;
        click_polarity = 1;
    } else {
        document.querySelector('#rogges.text1').textContent = text2;
        click_polarity = 0;
    }
});
*/
var roggesQuotes = [
    "It sounds funny but if i did not know this girl 24hrs ago",
    "In guelph you drink to forget you are in a lab managed by incompetence",
    "I am trying to get sabil back to dry land",
    "So they called my parents and told them he molested their 3yr daughter.........",
    "Wanna read the comics and be a hall of famer",
    "Oda obv just wanted to loop you in on the canadian version",
    "Eaton center is nice but i will take steroids so my risk of prostate cancer is higher",
    "I can check gap at queen west when i get back from finishing your crypto class",
    "I have an exam today?",
    "Saad would you want to be a space lord now?",
    "At least you are getting your ass kicked",
    "Leave the neuroscience and behaviour to the big cookout in the sky",
    "Oh then i will just use politically insensitive language and try to establish eye contact",
    "Went as well possible since i was working on making thermite to help me shovel my driveway",
    "Yo ali you wanna go to chick fil a?",
    "Worst that can happen to me is that they give you exclusive sales or financing if and only if you eat capsaicin aka chillis",
    "If the joker makes sense to you then it is artificially imposed"
];

var paviQuotes = [
    "I swear hamza probably started apologizing to tasfia as soon as he can because he has to come to phil's",
    "Yo even if its not fun for your 2 months, i feel like if you grow up somewhere, you just want to travel anywhere else",
    "I am heading to dc to pick up some pens for you",
    "There is no guarentees on what i will be against drinking next semester because its illegal",
    "It is not like lebron is a jobs creation program",
    "Is he eloping with the other nyc interns every weekend",
    "No i have not seen the videos where she said she does not care when he is getting murdered",
    "and then some library admin came and told me to do something interesting with the yelp business data",
    "Yo @ali nawed @rogges anandarajah remember when i thought my middle school was ghetto because we had janu",
    "Bro are you trying to kill julius cesar now",
    "Got the offer over the phone he is sending me a yelp shirt in the mail this week",
    "I kinda feel bad for you i am batman",
    "Machine learning algorithm that automatically colors old black and white people?",
    "No i do not think it is the girl i hit on last week",
    "Life is a disease and a virus"
];

var kishQuotes = [
    "Just fuck with the world",
    "Sk, me and her have been trying to find reasons to blow their money",
    "Rogges that is good, but how do you know if you can explore the land, the food, the girls",
    "I think rogges is the only one who benefited from that",
    "I am guessing it fell out of my pocket when i went to get the napkins though. and what ustc halloween thing?",
    "Free wifi is just a huge scheme at the end of the day, its acceptable pedo bait.",
    "Sprinkle broccoli florets, add a layer between finger and glue.",
    "There is some yogi who does coke",
    "Then dig a tunnel underneath it",
    "I will only mess with thannoj's account needlessly",
    "I heard, their atheltic cut chinos have great textured japanese denim",
    "Arrjun who is karthiga?",
    "haha lol, if it was, it would be saad hyping her up to us.",
    "Yo rogges i got you on food",
    "Who is this girl, pretty",
    "Tell him you are gay",
    "Killing people in your dreams means you are the guy who wanted to be friendzoned",
    "I will send you what i have heard some tracks already, stir fry is not good enough",
    "Bay had a sale on johnston & murphy shoes when i went to psa, i am a good flirt when tipsy",
    "Lowkey, janu gets an easy 8 possibly a 9",
    "His political and weed views were so sad when eating popeyes",
    "Damn, asians going to be sober by the time i am caught up except for this weeks chapter"
];

var avQuotes = [
    "She is one of my fav players too",
    "My ball game is real",
    "Pavi is undercover as usual and going to waterloo. best idea ever",
    "My hair used to be so shy",
    "Does anyone know how to use red lipstick",
    "Delon is going to become a franchise player",
    "kd is such a flopper",
    "I think we should do one last bbq",
    "Me kk vinoth r going to go ape shit in the playoffs",
    "Jesus i am so smashed",
    "At that party and i had to get srs with the biddies lol",
    "STFU ur going to talk shit about demar",
    "But i am the man",
    "I think i am going to go crazy",
    "Do you think og is going to average 10+ next season",
    "How r we going to do a bbw",
    "yo @pavi subenderan me and janu are wasted af styllz",
    "I do not wanna know what is going on in my life rn",
    "Yo rogges do you still play far cry?",
    "I always get the gun",
    "Ur such a boss",
    "Yo lebron is a god",
    "Matlab is so entertaining",
    "I only invite mans who do less than 75 on shoulders",
    "Girls in clubs so much better with hair"
];

var januQuotes = [
    "We need some gfs to get some discounts out here",
    "Yo can someone pick me up as your work out partner",
    "Rogges man how did you do it",
    "Wow ali why do i feel like partying",
    "Aushvin did not get pussy",
    "AV bro why do you think you are cool",
    "And he will never get a white girl",
    "I swear it was in a fucking binder",
    "I am going to kill you next rogges",
    "Bro this is why you guys are not on the right track",
    "Saad bro become a doctor and then come back and tell him to fk himself one more time",
    "I have no idea what is going on in this convo",
    "I think that is a question for my boy @aushvin vasanthakumaran",
    "I actually need someone to get a gf",
    "I wanna see if she is a good christian",
    "Bro who cares about the job market when he is going to talk about this for a year now",
    "He just does not know how to use a condom",
    "So guys cute tamil girl in front of me just stared back at him till he left",
    "Damn bro what ugly girls made fun of a dead baby like that"
];


document.querySelector(".rog").addEventListener('click', function() {
    document.querySelector(".markov").textContent = roggesQuotes[Math.floor(Math.random() * roggesQuotes.length)];
    document.querySelector(".quoter").textContent = "- Rogges";
});

document.querySelector(".pav").addEventListener('click', function() {
    document.querySelector(".markov").textContent = paviQuotes[Math.floor(Math.random() * paviQuotes.length)];
    document.querySelector(".quoter").textContent = "- Pavi";
});

document.querySelector(".kish").addEventListener('click', function() {
    document.querySelector(".markov").textContent = kishQuotes[Math.floor(Math.random() * kishQuotes.length)];
    document.querySelector(".quoter").textContent = "- Kishan";
});

document.querySelector(".av").addEventListener('click', function() {
    document.querySelector(".markov").textContent = avQuotes[Math.floor(Math.random() * avQuotes.length)];
    document.querySelector(".quoter").textContent = "- Aushvin";
});

document.querySelector(".jan").addEventListener('click', function() {
    document.querySelector(".markov").textContent = januQuotes[Math.floor(Math.random() * januQuotes.length)];
    document.querySelector(".quoter").textContent = "- Janusshan";
});