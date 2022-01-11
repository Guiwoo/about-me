import { useEffect } from "react";

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
