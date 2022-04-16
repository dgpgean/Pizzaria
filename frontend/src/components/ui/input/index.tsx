import {InputHTMLAttributes, TextareaHTMLAttributes} from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

function Input ({...rest}:InputProps){
  return(
    <input className={styles.input} {...rest}/>
  )
}

function Textarea ({...rest}:TextareaProps){
  return(
    <textarea className={styles.input} {...rest}> </textarea>
  )
}


export  {Input}