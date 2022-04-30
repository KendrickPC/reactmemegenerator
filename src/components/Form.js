import React from "react";
import memesData from "../memesData.js";


export default function Form() {
  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   * 
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   * 
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   * 
   * Lastly, update the `getMemeImage` function and the markup 
   * to reflect our newly reformed state object and array in the
   * correct way.
   */
  
  const [meme, setMeme] = React.useState({
    top: "",
    bottom: "",
    url: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const randomImageUrl = memesArray[randomNum].url;

    setMeme(prevState => {
      return {
        ...prevState,
        url: randomImageUrl,
      }
    })

  }

  return (
    <div>
      <div className="rowInput">
        <div className="columnInput">
          <form className="form">
            <input className="topMemeInput" placeholder="   Shut up">
            </input>
          </form>
        </div>
        <div className="columnInput">
          <form>
            <input className="bottomMemeInput" placeholder="   and take my money">
            </input>
          </form>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="memeButton" onClick={getMemeImage}> <h1>Get a new meme image</h1><img className="picsIcon" src="./images/pictures.png" alt="svg"/></button> 
      </div>
      <div className="heroRow">
      <div className="heroColumn">
        <img className="fry" src={meme.url} alt="random meme" />
      </div>
      </div>
    </div>
  )
}
