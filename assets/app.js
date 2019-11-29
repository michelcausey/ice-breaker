var questions = [
    "If you had a boat, what would you name it?", "What's the closest thing to real magic?", 
    "Who is the messiest person you know?", "What will finally break the internet?", 
    "What's the most useless talent you have?", "What would be on the gag reel of your life?", 
    "Where is the worst smelling place you've been?", "What celebrity would you rate as a perfect 10?", 
    "What's a body part you wouldn't mind losing?", "What is the dumbest way you've been injured?", 
    "Which fictional character would be the most boring to meet in real life?", "What is the best and worst purchases you've ever made?", 
    "If you had to change your name, what would your new one be and why?", "What are some things that sound like compliments but are actually insults?", 
    "What's your biggest screw up in the kitchen?", "What's the worst commercial you've recently seen? Why was it so bad?", 
    "What is the craziest thing one of your teachers has done?", "When did you screw everything up, but no one ever found out it was you?", 
    "What problem or situation did TV/Movies make you think would be common, but when you grew up you found out it wasn't?", 
    "What quote or saying do people spout, but is complete BS?", 
    "What's something your brain tries to make you do and you have to will yourself not to do it?", 
    "If you could know the absolute and total truth to one question, what question would you ask?", 
    "What's the most interesting thing you've read or seen this week?", 
    "What ridiculous thing has someone tricked you into doing or believing?", 
    "If you were given a one-minute ad slot during the Super Bowl, that you couldn't sell, what would you fill it with?", 
    "Is cereal soup? Why or why not?", "What is the sexiest and least sexy name?", "What secret conspiracy would you like to start?", 
    "What’s the best Wi-Fi name you’ve seen?", "What is the funniest joke you know by heart?", 
    "If animals could talk, which would be the rudest?", "How many chickens would it take to kill an elephant?", 
    "If life were a video game, what would some of the cheat codes be?", "Is the meaning of life the same for animals and humans?", 
    "If someone you loved was killed in front of you, but someone created a copy of them that was perfect right down to the atomic level, would they be the same person and would you love them just as much?", 
    "Will religion ever become obsolete?", "What life-altering things should every human ideally get to experience at least once in their lives?", 
    "Does knowledge have intrinsic value - or - does it need to have a practical use to have value?", 
    "What was your best drop the mic moment?", "Would you rather lose the ability to read - or - lose the ability to speak?", 
    "Would you rather be covered in fur - or - covered in scales?", "Would you rather have all traffic lights you approach be green - or - never have to stand in line again?", 
    "Would you rather be able to see 10 minutes into your own future - or - 10 minutes into the future of anyone but yourself?", 
    "Would you rather 5% of the population have telepathy, - or - 5% of the population have telekinesis? You are not part of the 5% that has telepathy or telekinesis.", 
    "Would you rather be a reverse centaur - or - a reverse mermaid/merman?", "Would you rather become twice as strong when both of your fingers are stuck in your ears - or - crawl twice as fast as you can run?", 
    "Would you rather be unable to use search engines - or - unable to use social media?", 
    "Would you rather be completely invisible for one day - or - be able to fly for one day?", "Are you usually early or late?", "Toast or Eggs?", 
    "iOS or Android?", "Hamburger or Taco?", "Money or Free Time?", "Ocean or Mountains?", "Comic Book or Comic Strips?", "Console Gaming or PC Gaming?", 
    "Pancake or Waffle?", "If humans lost the ability to see all color except one, which color would you want to survive?", 
    "What musical instrument do you wish you could play?", "What is your favorite memory of someone who isn’t in your life anymore?", 
    "If you had a friend who spoke to you the same way you speak to yourself, would you keep them as a friend?", 
    "What song do you play most often?", "What’s the best photo you’ve taken?", "What's the worst text that you accidentally sent?", 
    "When someone finds out what you do, or where you are from, what question do they always ask you?", "How could carousels be spiced up so they are more exciting?", 
    "What song(s) would be played on a loop in hell?", "When is the most interesting period in history?", "How did you get that scar of yours?", 
    "If someone came up to you and said “Hey, do that thing you do!”, what thing would pop into your head first?", "What do you resent paying for most?", 
    "What works of art have really made an impression on you?", "Who is the oldest person you know personally? What interesting stories have they told you?", 
    "What are some of the dumbest misadventures you’ve been on?", "Who is the most interesting stranger you’ve met?", 
    "If a new volcano formed and the government had an online contest to see what it would be named, what name would you submit?", 
    "How do you feel about clowns?", "What about becoming an adult caught you completely off guard?", 
    "What does your perfect burger or sandwich have in it?", "If the universe is just a simulation, what update or patch does it need?", 
    "What’s the best sports game you’ve been to?", "What are you hilariously bad at?", 
    "Tell me about a time you were totally out of your element/comfort zone.", 
    "If you left your current life behind and ran away to follow your dreams, what would you be doing?", "What food is underrated or underappreciated?", 
    "What is the most tedious sport to watch?", "What do you geek out about?", "What’s the best concert you’ve been to and why was it so good?", 
    "What is increasingly becoming socially acceptable?", "What period in history had the best fashion?", 
    "What would be your strategy for surviving an apocalyptic epidemic?", "If you could put your brain in a robot and live indefinitely, would you?", 
    "If you could replace the handshake as a greeting, what interesting new greeting would you replace it with?", 
    "When does time pass fastest for you and when does it pass the slowest?", "You can broadcast one sentence to every TV channel and radio in the world and have it translated to each country’s language. What sentence do you say?", 
    "What is quite possibly the most annoying thing ever?", "What world famous monument do you have no interest in visiting?", 
    "What is your very first memory?", "What is the most interesting piece of trivia you know?", 
    "You are in charge of making insects a popular food item. You have 1 billion US dollars to achieve your goal. How do you do it?", 
    "What double standard is ridiculous and needs to be ended?", "What one question can you ask someone to find out the most about them?", 
    "Who is your favorite author?", "What video game do you wish life was more like?", "If you could level up in life just like in video games, where would you put your next skill point?", 
    "Netflix or Youtube?", "Form or Function?", "New Clothes or New Phone?", "Football or Futbol?", "Bath or Shower?", "Toilet Paper: Over or Under?", 
    "Blinds or Curtains?", "International Vacation or New TV?", "Mac or PC", "Dine In or Delivery?", "Uber or Lyft?", "When sleeping: Fan or No Fan?", 
    "Facebook or Twitter?", "Text or Call?", "Book or Movie?", "Paper or Plastic?", "Flowers or Chocolates?", "Oh My: Lions, Tigers, or Bears?", 
    "Frozen Yogurt or Ice Cream?", "IT: Movies or TV Mini-Series?", "Fruits or Vegetables?", "Anna or Elsa?", 
    "You can have an unlimited supply of one thing for the rest of your life, what is it?", "What season are you?", 
    "Would you go with aliens if they beamed down to Earth?", "Are you a good dancer?", 
    "If you could instantly become an expert in something, what would it be?", "If you could go to Mars, would you? Why or Why not?", 
    "Would you rather live in the ocean - or - on the moon?", "Would you rather lose all your money - or - all of your pictures?", 
    "Would you rather be a superhero - or - the world's best chef?", "Isn't it crazy that you know the person who built this app?"    
]

function nextQ() {
    
    var players = ['Everyone']
    var randomPlayer = Math.floor(Math.random() * (players.length));
    console.log('random player: ' + randomPlayer)
    
    var randomQuestion = Math.floor(Math.random() * (questions.length));
    console.log('random question: ' + randomQuestion);

    document.getElementById('random').innerHTML = questions[randomQuestion]
    document.getElementById('player').innerHTML = "Question for: " + players[randomPlayer]
    
}