import {useFormik} from "formik";
import * as Yup from "yup";
import "./contactForm.css";
import InputField from "./InputField";
import {TextField} from "./InputField";

type PostSchemaType = Record<keyof Form, Yup.AnySchema>;

const PostSchema = Yup.object().shape<PostSchemaType>({
    name: Yup.string().min(4).max(20).required(),
    content: Yup.string().min(5).max(100).required(),
})

export interface Form {
    name: string
    content: string
}

export interface Props {
    defaultForm?: Form
    onSubmit: (form: Form) => void;
}

export default function ContactForm(props: Props) {
    const {errors, touched, handleSubmit, handleChange, handleBlur} =
        useFormik({
            initialValues: {name: "", content: ""},
            validationSchema: PostSchema,
            onSubmit: (form, {resetForm}) => {
                props.onSubmit(form);
                resetForm();
            }
        })

    return (
        <div className="contactContainer">

            <form onSubmit={handleSubmit} className="contactForm">
                <h3>Enter a name and tell us why you want to get in contact with us.</h3>
                <InputField
                    label="name"
                    placeholder="Name..."
                    className="inputField"
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && errors.name}
                />

                <TextField
                    label="content"
                    className="TextContent"
                    placeholder="Write your content..."
                    id="content"
                    name="content"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.content && errors.content}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}