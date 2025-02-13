const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.adviceslip.com/advice";

const getquote = async () => {
 try {
     const response = await fetch("https://api.adviceslip.com/advice");
     if (!response.ok) throw new Error("Failed to fetch quote");
     const data = await response.json();
     quote.innerHTML = `"${data.slip.advice}"`; 
     author.innerHTML = `- Unknown`; 
 } catch (error) {
     quote.innerHTML = "Oops! Couldn't fetch a quote.";
     author.innerHTML = "";
     console.error(error);
 }
};

getquote(api_url);

const tweet = () => {
 window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}