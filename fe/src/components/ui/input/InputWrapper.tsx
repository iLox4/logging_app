import { ReactNode } from 'react'
import './InputWrapper.css'

type InputWrapperProps = {
    children: ReactNode | ReactNode[],
    width?: string,
    inputLabel?: string,
    inputId: string
}

const InputWrapper = ({ children, width = '200px', inputLabel, inputId }: InputWrapperProps) => {
    return (
        <div className='input' style={{width}}>
            {inputLabel ?? <label htmlFor={inputId}>{inputLabel}</label>}
            {children}
        </div>
    )
}

export default InputWrapper