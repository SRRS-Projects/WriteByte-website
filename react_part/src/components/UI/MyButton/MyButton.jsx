import classes from './MyButton.module.css'

function MyButton(props) {
  return (
    <button {...props} className={classes.MyButton}>{props.children}</button>
  );
}

export default MyButton;
