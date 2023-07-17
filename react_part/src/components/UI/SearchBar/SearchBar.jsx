import classes from './SearchBar.module.css'

function SearchBar(props) {
    return ( 
        <input {...props} className={classes.SearchBar}>
            
        </input>
    );
}

export default SearchBar;