const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Dream big. Start small. Act now. — Robin Sharma",
  "Happiness depends upon ourselves. — Aristotle",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "If you want to lift yourself up, lift up someone else. — Booker T. Washington",
  "Act as if what you do makes a difference. It does. — William James",
  "Everything you can imagine is real. — Pablo Picasso",
  "Failure is simply the opportunity to begin again, this time more intelligently. — Henry Ford",
  "Turn your wounds into wisdom. — Oprah Winfrey",
  "Be so good they can’t ignore you. — Steve Martin",
  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
  "You must be the change you wish to see in the world. — Mahatma Gandhi",
  "Courage doesn’t always roar. Sometimes it’s the quiet voice at the end of the day saying, ‘I will try again tomorrow.’ — Mary Anne Radmacher",
  "What we think, we become. — Buddha"
];

const button= document.querySelector("button");
const quote= document.querySelector("h1");
 button.addEventListener('click',()=>{
    const index= Math.floor(Math.random()*20);
    quote.textContent= quote[index];
 })