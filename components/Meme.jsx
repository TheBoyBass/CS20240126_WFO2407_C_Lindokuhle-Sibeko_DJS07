import memesData from "../src/MemesData.jsx"

export default function Meme() {
    let url

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomIndex].url
        console.log(url)

    }
    return (
        <main>
            <form className="form">
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
            </form>
        </main>
    )
}
