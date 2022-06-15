import React, {useEffect, useState} from 'react'

const getArticleContent = () => {
  return Promise.resolve([
    {
      _id: "O23JTX787658I7CD6U3235ENM",
      content:
        "Space suddenly seems a little more reachable.",
      type: "heading",
      level: 1,
    },
    {
      _id: "O23JTX787658I7CD6U32YUTEXS",
      content: "At least, for those who have cash to burn.",
      type: "heading",
      level: 2,
    },
    {
      _id: "4e1c3c8e-01cc-11ec-9a03-0242ac130003",
      src: "https://picsum.photos/600/400",
      alt: "Space ship launching from Cape Canaveral",
      width: 400,
      height: 250,
      type: "image",
    },
    {
      _id: "AF73UZELANBEHOM3YZA6Y6HSJM",
      content:
        "Virgin Galactic’s announcement Tuesday that it is going public through a merger with an investment firm came with an update that the company is preparing to send its first customers into space within a year, CNBC reported. More than 600 people have placed deposits topping $80 million in total, chairman Chamath Palihapitiya told the network, and another 2,500 want to get in line.",
      type: "paragraph",
    },
    {
      _id: "67VJ3WYZWJHWHKG4SQM5GUDMGM",
      content:
        "Virgin isn’t alone in the space race: Blue Origin, Jeff Bezos’s space exploration company, is promoting “the largest windows in space” on its New Shepard capsule, although test flights with humans onboard have not yet taken place. (Bezos owns The Washington Post.) Elon Musk announced last year that his company, SpaceX, has a customer lined up who will pay to fly around the moon. Last month, NASA made a change in policy and said it would allow space tourists to visit the International Space Station as soon as next year. The agency said logistics would have to be arranged by SpaceX and Boeing, which NASA has tapped to get crews to the space station.",
      type: "paragraph",
    },
    {
      _id: "PSZ77YVHDFAZXFVQ7F2YNOMI4E",
      content:
        "So will we all be jetting around space with our cameras, orbital passports and zero-gravity fanny packs in a decade? Not so fast. Here’s what potential space explorers need to know.",
      type: "paragraph",
    }
  ])
};

function Articles(props){
  return(
    <article>
      {props.content.map((each)=> {
        const {content, src, alt, _id, level, type} = each;
        switch(type){
          case 'heading':
            return(
              level === 1 ? <h2 key={_id}>{content}</h2> : <h3 key={_id}>{content}</h3>
            )
          case 'image':
            return(
              <figure key={_id}><img src={src} alt={alt} /><figcaption>caption</figcaption></figure>
            )  
          case 'paragraph':
            return (
              <p key={_id}>{content}</p>
            )
          default:
            return null
        }
      })}
    </article>
  )
}

export default function Check(){
  const [content, setContent] = useState([])
  const [error, setError] = useState(null)

  // const getData = async () =>{
  //   try{
  //     const data = await getArticleContent()
  //     setContent(data)
  //   }
  //   catch(Error){
  //     console.warn(Error)
  //     setError(Error.message)
  //   }
  // }
  const getData = () =>{
    const data = getArticleContent()
    .then((res) =>{
      setContent(res)
    })
    .catch((Error) => {
      console.warn(Error.message)
    })
  }
  useEffect(()=>{
    getData()
  },[])

  return(
    <React.Fragment>
      <header>
        <h1>News</h1>
      </header>
      <main>
        <Articles content={content}/>
      </main>
    </React.Fragment>
  )
}