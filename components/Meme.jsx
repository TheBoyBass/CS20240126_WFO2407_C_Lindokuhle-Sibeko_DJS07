export default function Meme() {
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
                    type="submit"
                    className="form--button"
                >
                    Get a new meme image
                </button>
            </form>
        </main>
    )
}
