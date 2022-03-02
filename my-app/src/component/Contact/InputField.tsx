import React, {InputHTMLAttributes, TextareaHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | false;

}

interface TextProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string | false;
}

export default function InputField({label, error, id, ...props}: InputProps) {
    return (
        <div>
            <label htmlFor={id}></label>
            <input id={id} {...props} />
            {error && <p className="errorMessage">{error}</p>
            }
        </div>

    )
}

export function TextField({label, error, id, ...props}: TextProps) {
    return (
        <div>
            <label htmlFor={id}></label>
            <textarea id={id} {...props} />
            {error && <p className="errorMessage">{error}</p>
            }
        </div>
    )
}


