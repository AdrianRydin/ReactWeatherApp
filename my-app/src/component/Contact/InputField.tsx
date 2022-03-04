import React, {InputHTMLAttributes, TextareaHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | false;

}

//Function for the input field in the ContactForm
export default function InputField({label, error, id, ...props}: InputProps) {
    return (
        <div>
            <label htmlFor={id}>
            </label>
            <input id={id} {...props} />
            {error && <p className="errorMessage">{error}</p>
            }
        </div>

    )
}



