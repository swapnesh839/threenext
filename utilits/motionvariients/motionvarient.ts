import { delay } from "framer-motion";

export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -90, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.8,
          type: "spring"
        },
      },
    };
  }
  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 90, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.8,
          type: "spring"
        },
      },
    };
  }
  
  export function slideInFromTop(delay: number)  {
    return {
      hidden: { y: -90, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.8,
          type: "spring"
        },
      },
    }
  };

 export function slideInFromBottom()  {
    return {
      hidden: { y: 90, opacity: 0 },
      visible:(index:number)=>({
          y: 0,
          opacity: 1,
          transition: {
            delay: .7*index, 
            duration: 0.8,
            type: "spring",
          },
        })
    }
  };