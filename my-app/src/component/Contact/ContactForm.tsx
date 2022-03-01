import { useFormik } from "formik";
import * as Yup from "yup";
import "./contactForm.css";

type CreateForm = Omit<Post, "id">
type PostSchemaType = Record<keyof CreateForm, Yup.AnySchema>;

const PostSchema = Yup.object().shape<PostSchemaType>({
    name: Yup.string().min(4).max(20).required(),
    content: Yup.string().min(5).max(100).required(),
})

export interface Post {
    name: string
    content: string
}

interface Props {
    defaultForm?: Post;
    onSubmit: (form: CreateForm) => void
}

const emptyForm: CreateForm = {
    name: "",
    content: ""
}

export default function ContactForm(props: Props) {
    const { errors, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: props.defaultForm || emptyForm,
            validationSchema: PostSchema,
            onSubmit: (post, { resetForm }) => {
                props.onSubmit(post);
                resetForm();
            }
        })

    return (
        <div className="contactContainer">
            <form onSubmit={handleSubmit} className="contactForm">
                <label className="labelForm">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.name}


                <label className="labelForm">Content</label>
                <input
                    className="InputContent"
                    type="text"
                    name="content"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.content}
                <button type="submit">Send</button>

            </form>

        </div>
    )
}