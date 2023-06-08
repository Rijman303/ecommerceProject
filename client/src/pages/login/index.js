import { Formik, Form, Field } from 'formik';
import Link from 'next/link';


const Login = ()=> {
   const triggerLogin = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const res =  await fetch('http://localhost:3001/login', requestOptions)
  const data = await res.json()
  if(data.isLoggedIn){
  
  }

   }
    return (
        <div>
          
       <Formik
          initialValues={{
            phoneNumber:'',
            userName: '',
            password: ''
          }}
          onSubmit={values => {
            triggerLogin(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="phoneNumber" placeholder="phoneNumber"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="userName" placeholder="userName"/>
              {errors.userName && touched.userName ? (
                <div>{errors.userName}</div>
              ) : null}
              <br/>
              <Field name="password"  type ="password"placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>

              <button type="submit">Submit</button>
              <small>Don't have an account yet ?</small>
              <Link href="/register">sign up</Link>
              <br/>
              
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Login