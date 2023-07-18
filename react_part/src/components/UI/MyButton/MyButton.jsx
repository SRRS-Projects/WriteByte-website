import classes from './MyButton.module.css'

function MyButton({children}, ...props) {
  return (
    <button className={classes.MyButton}>
      <span>{children}</span>
      <div className="border full-rounded"></div>
    </button>
  );
}

export default MyButton;
