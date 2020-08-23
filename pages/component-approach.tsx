import { Formik, Form, Field } from 'formik';
import { InputGroup, FormGroup, Button } from '@blueprintjs/core';
import * as yup from 'yup';

import Layout from '../components/Layout';
import MdxProvider from '../components/MdxProvider';
import CodeBlock from '../mdx/component-approach.mdx';

import styles from './component-approach.module.css';

function ComponentsApproach() {
  return (
    <Layout>
      <a
        target='_blank'
        href='https://github.com/ivanms1/formik-field-components/blob/master/pages/component-approach.module.css'
        className={styles.SeeCodeContainer}
      >
        <img
          src='/assets/github-logo.png'
          className={styles.GithubLogo}
          alt='github logo'
        />
      </a>
      <div className={styles.ExampleContainer}>
        <h2 className={styles.Title}>Custom Component Approach</h2>
        <Formik
          initialValues={{ name: '', email: '' }}
          onSubmit={(values) =>
            alert(`Thanks for submitting your form ${values.name} `)
          }
          validationSchema={yup.object().shape({
            name: yup.string().required('Name is a required field'),
            email: yup
              .string()
              .email('Not a valid email')
              .required('Email is a required field'),
          })}
        >
          {() => (
            <Form className={styles.Form}>
              <div className={styles.Fields}>
                <div className={styles.FieldContainer}>
                  <Field
                    id='name'
                    className={styles.Field}
                    name='name'
                    placeholder='Your Name'
                  >
                    {({ field, form, meta }) => (
                      <FormGroup
                        label='Name'
                        helperText={meta.touched && meta.error && meta.error}
                        intent={meta.touched && meta.error ? 'danger' : 'none'}
                        labelInfo='(required)'
                      >
                        <InputGroup
                          value={field.value}
                          onChange={(e) =>
                            form.setFieldValue(field.name, e.target.value)
                          }
                          intent={
                            meta.touched && meta.error ? 'danger' : 'none'
                          }
                          placeholder='Carlos Sanchez'
                        />
                      </FormGroup>
                    )}
                  </Field>
                </div>
                <div className={styles.FieldContainer}>
                  <Field id='email' className={styles.Field} name='email'>
                    {({ field, form, meta }) => (
                      <FormGroup
                        label='Email'
                        helperText={meta.touched && meta.error && meta.error}
                        intent={meta.touched && meta.error ? 'danger' : 'none'}
                        labelInfo='(required)'
                      >
                        <InputGroup
                          value={field.value}
                          onChange={(e) =>
                            form.setFieldValue(field.name, e.target.value)
                          }
                          intent={
                            meta.touched && meta.error ? 'danger' : 'none'
                          }
                          placeholder='example@mail.com'
                        />
                      </FormGroup>
                    )}
                  </Field>
                </div>
              </div>
              <Button
                type='submit'
                className={styles.SubmitButton}
                intent='primary'
                large
                fill
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <MdxProvider>
        <CodeBlock />
      </MdxProvider>
    </Layout>
  );
}

export default ComponentsApproach;
