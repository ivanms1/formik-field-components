import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@blueprintjs/core';
import * as yup from 'yup';

import Layout from '../components/Layout';
import MdxProvider from '../components/MdxProvider';
import CodeBlock from '../mdx/use-field-approach.mdx';
import ComponentCodeBlock from '../mdx/use-field-input.mdx';

import styles from './reusable-approach.module.css';
import UseFieldInput from '../components/UseFieldInput';

function ReusableApproach() {
  const [seeComponent, setSeeComponent] = useState(false);
  return (
    <Layout>
      <a className={styles.SeeCodeContainer}>
        <img
          src='/assets/github-logo.png'
          className={styles.GithubLogo}
          alt='github logo'
        />
      </a>
      <div className={styles.ExampleContainer}>
        <h2 className={styles.Title}>useField Approach</h2>
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
                  <UseFieldInput
                    id='name'
                    className={styles.Field}
                    name='name'
                    placeholder='Jhon Doe'
                    labelInfo='(required)'
                    label='Name'
                  />
                </div>
                <div className={styles.FieldContainer}>
                  <UseFieldInput
                    id='email'
                    type='email'
                    className={styles.Field}
                    labelInfo='(required)'
                    name='email'
                    label='Email'
                    placeholder='email@mail.com'
                  />
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
      <div>
        <Button
          type='button'
          className={styles.SeeComponentButton}
          intent='none'
          minimal
          outlined
          onClick={() => setSeeComponent(!seeComponent)}
        >
          {seeComponent ? 'See Form' : 'See useField Input'}
        </Button>
        <MdxProvider>
          {seeComponent ? <ComponentCodeBlock /> : <CodeBlock />}
        </MdxProvider>
      </div>
    </Layout>
  );
}

export default ReusableApproach;
