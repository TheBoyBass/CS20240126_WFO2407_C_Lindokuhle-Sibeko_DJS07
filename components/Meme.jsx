//importing meme data from the source
import memesData from "../src/MemesData.jsx"
import React from "react"
//Creating the meme function which generates the meme output
export default function Meme() {
    //State to store the meme data
    const [memeImage, setMemeImage] = React.useState("")

// getMemem image function gets the image from the Data aray using random()
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomIndex].url)

    }
    return (
    //Main component that contains the form
        <main>
            <div className="form">
                <div>
                    <label > Top Text
                        <input 
                            type="text" 
                            placeholder="Enter your top caption" 
                            className="form--input"
                        />
                    </label>
                </div>
                
                <div>
                    <label> Bottom Text
                        <input 
                            type="text" 
                            placeholder="Enter your bottom caption" 
                            className="form--input"
                        />
                    </label>
                </div>
                
                
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            {/* Displaying the generated meme image */}
            <img src={memeImage} className="meme-image"/>
        </main>
    )
}
