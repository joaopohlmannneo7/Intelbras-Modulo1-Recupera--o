import {Formik, Form, Field, useFormik} from 'formik'
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import * as Yup from "yup";
import Upvote from './UpAndDown';

const schema = Yup.object().shape({
    nome: Yup.string().required(),
    email: Yup.string().email("Insira um email válido").required(),
    coment: Yup.string().required().max(63),
})


 export const Formulary = () =>{
    
  
  
 
const onSubmit = (values, actions) => {
  console.log(values);
  
  console.log(localStorage.getItem('forms-data')) 
  const data = JSON.parse(localStorage.getItem('forms-data') || '[]')  
data.push(values)


localStorage.setItem('forms-data', JSON.stringify(data))


  console.log(data)
  setFormsData(data)


    new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()


};

const [formsData, setFormsData] = useState([])
useEffect(()=> {
    const data = JSON.parse(localStorage.getItem('forms-data') || '[]')
    setFormsData(data)
}, [])


    const {
   
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
          email: "",
          nome: "",
          coment: "",
          id:   JSON.stringify(new Date().getTime()),
        },
        validationSchema: schema,
        onSubmit,
      });

    
   
 
      
return(

    <div>
      <Box>
      <h2>Comentários</h2>
       

       <form onSubmit={handleSubmit} autoComplete="off">
           <div>
             <span value={values.id}></span>
        
           <input  value={values.nome} id='nome'name='nome'  placeholder="Nome"   onChange={handleChange} type='text'className={errors.nome && touched.nome ? "input-error" : ""}/>
           {errors.nome && touched.nome && <p className="error">{errors.nome}</p>}
           </div>
           <div>
          
           <input  value={values.email}  placeholder="Email" id='email'name='email'    onChange={handleChange} type='email'   className={errors.email && touched.email ? "input-error" : ""}/>
           {errors.email && touched.email && <p className="error2">{errors.email}</p>}
           </div>
           <div>
           
           <textarea id='comment' name="coment" as="textarea"className="textarea" placeholder="Comentário" onChange={handleChange} value={values.coment}/>
           </div>
           <button type="submit" disabled={isSubmitting}>Salvar</button>
       
       </form>
      </Box>
      
               
        
              
{formsData.map((items)=>{
                

                return(
                  <Comments>
                    <h2>{items.nome}</h2>
                    <p>{items.coment}</p>
                    <Upvote/>
                  </Comments>
                )
                })}
    </div>
)
}

export const Box = styled.div`


  
  margin: 0px 0px 0px 20px;
    width: 560px;
    gap: 30px;
    height: 550px;
  font-size: 20px;
  position: relative;
left:50px;
top: -650px;
#nome{
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  width: 280px;
  height: 32px;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid #808080;
  border-radius: 4px;
  position: relative;
  left: 50px;
  margin-top: 20px;
  
}

#email{
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  width: 280px;
  height: 32px;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid #808080;
  border-radius: 4px;
  position: relative;
  top: -33px;
  left: 388px;
}
#comment{
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  
  width: 620px;
  height: 280px;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid #808080;
  border-radius: 4px;
  position: relative;
  left: 50px;
}


/* CSS */
button {
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid black;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  position: relative;
  left: 50px;
}

button:hover,
button:focus {
  background-color: #b3d3ea;
  color: black;
}

button:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

button:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}

.error{
  position: absolute;
  top: 152px;
  left: 50px;
  color: red;
}
.error2{
  position: relative;
  left: 390px;
  color: red;
}
`
export const Comments = styled.div`

position: relative;
top: -680px;

left: 120px;

h2{
  margin-top: 30px ;
}
p{
  font-size: 20px;
  margin: 30px 0px 20px 0px
}

`