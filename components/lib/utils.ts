import { Post } from "#site/content";

export const  validateString=(value:unknown,maxLength:number)=>{
  if(!value || typeof value !=="string" || value?.length>maxLength){
    return false
  }
  return true
}


export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error?.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error?.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};


export const DateFormate = (date:string) => {
  const currentDate: Date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  };
  let formattedDate = currentDate?.toLocaleDateString('en-US', options);

  return formattedDate.toString() 
}



export const fadeIn=(direction:string,delay:number)=>{
  return{
    hidden:{
      y:direction==="up"? 80:direction==="down"? -80:0,
      x:direction==="left"? 80:direction==="right"? -80:0,
    },
    show:{
      y:0,
      x:0,
      opacity:1,
      transition:{
        type:'tween',
        duration:0.5,
        delay:delay,
      }
    }
  }
}

export const fadeInAnimationVariants={
  initial:{
    opacity:0,
    y:80,
  },
  animate:(index :number)=>({
    opacity:1,
    y:0,
    transition:{
      delay:0.1 * index,
      duration:0.5,
    }
  }),

};


export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function calculateReadingTime(mdxContent: any) {
  const wordsPerMinute = 200;
  const text = mdxContent.replace(/<\/?[^>]+(>|$)/g, '');  
  const wordCount = text
    .split(/\s+/)
    .filter((word: any) => word.length > 0).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}