import "./Test.css"

function Test() {
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    });
    return(
        <div className='Test'>
            <button>Generate Cat Fact</button>
            <p> </p>
        </div>
    );
}

export default Test;