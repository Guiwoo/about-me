import { useEffect } from "react";
import routeName from "./routeName";

export const extracText = (url: string) => {
  switch (url) {
    case routeName.home:
      return "Home"
      break;
    case routeName.me:
      return "About Me"
      break;
    case routeName.projects:
      return "Projects"
      break;
    case routeName.fifth:
      return "Projects 1"
      break;
    case routeName.second:
      return "Projects 2"
      break; 
    case routeName.third:
      return "Projects 3"
      break;
    case routeName.fourth:
      return "Projects 4"
      break;
    case routeName.fifth:
      return "Projects 5"
      break;
    case routeName.sixth:
      return "Projects 6"
      break;
    default:
      return "Project 7"
  }
};

export const useIntervalTitle = (count: number, time: number) => {
  let num = count;
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
      num++;
      if (num === document.querySelectorAll(".hidden").length) {
        clearInterval(timer);
      }
    }, time);
    return () => {
      clearInterval(timer);
    };
  }, [num]);
};
