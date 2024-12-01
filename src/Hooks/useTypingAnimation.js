import React, { useEffect, useRef, useState } from "react";

export const useTypingAnimation = (
  textArray,
  textInArrayCur = 0,
  setTextInArrayCur,
  stopTime = 5000,
  toNewTime = 200,
  addSpeed = 100,
  delSpeed = 50,
) => {
  const [activeText, setActiveText] = useState("");
  const letterCurRef = useRef(0);
  const solvedTextRef = useRef("");

  useEffect(() => {
    const textInArray = textArray[textInArrayCur];
    letterCurRef.current = 0;
    solvedTextRef.current = "";

    const textInterval = setInterval(() => {
      if (letterCurRef.current < textInArray.length) {
        solvedTextRef.current += textInArray[letterCurRef.current];
        letterCurRef.current++;
        setActiveText(solvedTextRef.current);
      } else {
        clearInterval(textInterval);
        setTimeout(() => {
          const textReverseInterval = setInterval(() => {
            solvedTextRef.current = solvedTextRef.current.slice(0, -1);
            setActiveText(solvedTextRef.current);
            if (solvedTextRef.current.length === 0) {
              clearInterval(textReverseInterval);
              setTimeout(() => {
                setTextInArrayCur((prev) => (prev + 1) % textArray.length);
              }, toNewTime);
            }
          }, delSpeed);
        }, stopTime);
      }
    }, addSpeed);

    return () => {
      clearInterval(textInterval);
    };
  }, [textInArrayCur]);

  return activeText;
};
