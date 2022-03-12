import { useEffect } from "react";
import routeName from "./routeName";

export const extracText = (url: string) => {
  switch (url) {
    case routeName.home:
      return "Home"
    case routeName.me:
      return "About Me"
    case routeName.projects:
      return "Projects"
    case routeName.first:
      return "Projects 1"
    case routeName.second:
      return "Projects 2"
    case routeName.third:
      return "Projects 3"
    case routeName.fourth:
      return "Projects 4"
    case routeName.fifth:
      return "Projects 5"
    case routeName.sixth:
      return "Projects 6"
    case routeName.seven:
      return "Projects 7"
    default:
      return "404"
  }
};



export const useIntervalTitle = (count: number, time: number) => {
  let num = 0;
  useEffect(() => {
    const getText = document.querySelectorAll("span");
    getText.forEach((span) => {
      const splitText = span.innerText.split("");
      span.textContent = "";
      splitText.map((char) => {
        const eachSpan = document.createElement("span");
        eachSpan.innerText = char;
        eachSpan.className = "hidden";
        span.appendChild(eachSpan);
        return null;
      });
    });
    let timer = setInterval(() => {
      const span = document.querySelectorAll(".hidden")[num];
      span.classList.add("fadeIn");
      num++
      if (num === document.querySelectorAll(".hidden").length) {
        clearInterval(timer);
      }
    }, time);
    return () => {
      clearInterval(timer);
    };
  }, [num, time]);
};
