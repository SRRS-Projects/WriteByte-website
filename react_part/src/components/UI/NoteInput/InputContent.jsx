import TextareaAutosize from 'react-textarea-autosize';
import classes from './InputContent.module.css'

function InputContent(props) {
  return <TextareaAutosize className={classes.InputContent} placeholder={props.placeholder}></TextareaAutosize>;
}

export default InputContent;
