//importing meme data from the source

import React from "react"
//Creating the meme function which generates the meme output
export default function Meme() {
    //State to store the meme data
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    //State to store the meme image
    const [allMemes, setAllMemes] = React.useState([])

    // Function to fetch meme data from the server
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
        .catch(error => console.log('Error:', error))
        }, [])

    // getMemem image function gets the image from the Data aray using random()
    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    // function to generate the text from the inputs and outputs on the image
    function handleChanges(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
           ...prevMeme,
            [name]: value
        }))
    }
    //Rendering the meme component
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
                            name="topText"
                            value={meme.topText}
                            onChange={handleChanges}
                        />
                    </label>
                </div>
                
                <div>
                    <label> Bottom Text
                        <input 
                            type="text" 
                            placeholder="Enter your bottom caption" 
                            className="form--input"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChanges}
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
            <div className="meme">
                {/* Displaying the generated meme image */}
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
