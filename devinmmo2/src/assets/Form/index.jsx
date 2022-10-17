import {Formik, Form, Field} from 'formik'
import * as Yup from "yup";

const schema = Yup.object().shape({
    nome: Yup.string().required(),
    email: Yup.string().email().required(),
    coment: Yup.string().required(),
})
export const Formulary = () =>{

return(

    <div>
        <h2>Comentários</h2>
        <Formik
        validationSchema={schema}
        initialValues={{
            nome: '',
            email: '',
            coment: ''
        }}>
            {({errors}) =>(
                <Form>
                    <div>
                    <label htmlFor='nome'>Nome</label>
                    <Field id='nome'name='nome' type='text'/>
                    </div>
                    <div>
                    <label htmlFor='email'>Email</label>
                    <Field id='email'name='email' type='email'/>
                    </div>
                    <div>
                    <label htmlFor='coment'>Comentário</label>
                    <Field name="coment" as="textarea"className="textarea" placeholder="Comentário"/>
                    </div>
                    <button type="submit">Submit</button>
                   {errors.name && (
                    errors.email
                   )}
                </Form>
            )}
        </Formik>
        
    </div>
)
}