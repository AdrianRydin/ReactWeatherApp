import React, {TextareaHTMLAttributes} from "react";


interface TextProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string | false;
}

//Function for the text field in the ContactForm
export default function TextField({label, error, id, ...props}: TextProps) {
    return (
        <div>
            <label htmlFor={id}>
            </label>
            <textarea id={id} {...props} />
            {error && <p className="errorMessage">{error}</p>
            }
        </div>
    )
}