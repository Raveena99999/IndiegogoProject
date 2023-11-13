import {Text} from '@chakra-ui/react'
import React from 'react'


let cardData={
  "posts": [
    { "image": "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/mwzutnsu2czjn3m4zisw",
    "funding": "FUNDING",
    "title":"MONTEK ",
    "link":"https://www.indiegogo.com/projects/montek-2000w-suitcase-power-station-x1200-x2000/hmco",
    "description":"",
    "category":"Health And Fitness"
  },

{
  "image":"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/r1fgozbl1q3n2n1xbxkf",
  "funding":"FUNDING",
  "title":"[Six Weeks](https://www.indiegogo.com/projects/six-weeks/hmco)",
  "description":"",
  "category":"FILM",

},


{
  "image":"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/igohre0gu5h7iedpvk3a",
  "funding":"Funding",
  "title":"[The Lie Behind The Star-Graphic Novel](https://www.indiegogo.com/projects/the-lie-behind-the-star-graphic-novel/hmco)",
  "description":"",
  "category":"COMICS",

},


{
  "image":"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/zmhle5jmyfogdyoihrru",
  "funding":"FUNDING",
  "title":"[Giga Design Eye Of Horus Automatic Skeleton Watch](https://www.indiegogo.com/projects/ciga-design-eye-of-horus-automatic-skeleton-watch/hmco)",
  "description":"",
  "category":"",

},



// {
//   "image":"",
//   "funding":"",
//   "title":"",
//   "description":"",
//   "category":"",

// },


// {
//   "image":"",
//   "funding":"",
//   "title":"",
//   "description":"",
//   "category":"",

// },


// {
//   "image":"",
//   "funding":"",
//   "title":"",
//   "description":"",
//   "category":"",

// },



// {
//   "image":"",
//   "funding":"",
//   "title":"",
//   "description":"",
//   "category":"",

// },


// {
//   "image":"",
//   "funding":"",
//   "title":"",
//   "description":"",
//   "category":"",

// },


// {
//   "image":"",
//   "funding":"",
//   "title":"",
//   "description":"",
//   "category":"",

// },


// {
//   "image":"",
//   "funding":"",
//   "title":"",
//   "description":"",
//   "category":"",

// },



// {
//   "image":"",
//   "funding":"",
//   "title":"",
//   "description":"",
//   "category":"",

// },

  ]
}

export default function Practice() {
  return (
    <div>
      <Text fontSize="28px">Popular Projects</Text>
      {cardData.posts.map((data)=>(
        <div key={data.id}>

<img src={data.image} alt="project" />
          <p >
            <a href={data.link}>
            {data.title}
            </a>
            
        </p>
          <p>{data.description}</p>
          
          <p>{data.category}</p>
          
         </div>
      ))}
    </div>
  )
}


