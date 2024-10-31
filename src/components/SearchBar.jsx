import '../styles/SearchBar.css';

function SearchBar (){
    return (
        <div className="search">
        
        <input type="text" placeholder="Pokemon Finder"></input>
        <button type="submit"><i className="search-button"></i></button>
          
        </div>
    )
}

export default SearchBar;