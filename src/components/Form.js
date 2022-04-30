import React from "react";

export default function Form() {
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
        <button className="memeButton"><h1>Get a new meme image</h1><img className="picsIcon" src="./images/pictures.png" alt="svg"/></button> 
      </div>
    </div>
  )
}
