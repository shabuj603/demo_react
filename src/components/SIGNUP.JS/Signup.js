import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { object, string, number, date, InferType } from 'yup';
const Signup =()=>{

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        validationSchema:Yup.object({
            name: string().min(2,"name must have 2 characters").required(),
            email: string().email('Invalid email').required('Required'),
            password:string().min(8,"name must have 8 characters").required(),
            website: string().url().nullable(),
            number: number().nullable(),
            createdOn: date().default(() => new Date()),
        }),
        onSubmit:(value,{resetForm})=>{
            console.log(value);
            resetForm({
                value:"",
            })
        }
    })
    return(
        <>        
        <h1>Signup page</h1>
    <Form onSubmit={formik.handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" onChange={formik.handleChange} value={formik.values.name}/>
        <Form.Text className="text-muted">
        {formik.errors.name && formik.touched.name ? (
             <div style={{color:"red"}}>{formik.errors.name}</div>
           ) : null}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={formik.handleChange} placeholder="Enter email" value={formik.values.email} />
        <Form.Text className="text-muted">
        {formik.errors.email && formik.touched.email ? (
             <div style={{color:"red"}}>{formik.errors.email}</div>
           ) : null}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={formik.handleChange} placeholder="Password" value={formik.values.password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>


    )
}
export default Signup;