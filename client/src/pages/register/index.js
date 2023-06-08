import { Formik, Form, Field } from 'formik';
import Link from 'next/link';



const Register = ( )=> {
   
    return (
        <div>
    
      <h3>Create new account</h3>
        <Formik
          initialValues={{
            phoneNumber:'',
            userName: '',
            password: '',
            email: ''
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/register', requestOptions)
      
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
              <Field name="email"  placeholder="email"/>
              {errors.email && touched.email ? (
              <div>{errors.email}</div>
               ): null}
              <br/>
              
              <button type="submit">Submit</button>
              <br/>
              <small>Already have an account ? </small>
              <Link href="/login">Sign In</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register