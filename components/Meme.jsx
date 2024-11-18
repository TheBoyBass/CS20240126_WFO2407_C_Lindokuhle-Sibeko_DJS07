export default function Meme() {
    return (
        <main>
            <form className="form">
                <input 
                    type="text" 
                    placeholder="Enter your top caption" 
                    className="form--input"
                />
                <input 
                    type="text" 
                    placeholder="Enter your bottom caption" 
                    className="form--input"
                />
                <button 
                    type="submit"
                    className="form--button"
                >
                    Get a new meme image
                </button>
            </form>
        </main>
    )
}
