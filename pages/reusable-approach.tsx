import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@blueprintjs/core';
import * as yup from 'yup';

import Layout from '../components/Layout';
import CustomInput from '../components/CustomInput';
import MdxProvider from '../components/MdxProvider';
import CodeBlock from '../mdx/reusable-component-approach.mdx';
import ComponentCodeBlock from '../mdx/custom-input.mdx';

import styles from './reusable-approach.module.css';

function ReusableApproach() {
  const [seeComponent, setSeeComponent] = useState(false);
  return (
    <Layout>
      <a
        target='_blank'
        href='https://github.com/ivanms1/formik-field-components/blob/master/pages/reusable-approach.tsx'
        className={styles.SeeCodeContainer}
      >
        <img
          src='/assets/github-logo.png'
          className={styles.GithubLogo}
          alt='github logo'
        />
      </a>
      <div className={styles.ExampleContainer}>
        <h2 className={styles.Title}>Reusable Component Approach</h2>
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
                    placeholder='Jhon Doe'
                    component={CustomInput}
                    labelInfo='(required)'
                    label='Name'
                  />
                </div>
                <div className={styles.FieldContainer}>
                  <Field
                    id='email'
                    type='email'
                    className={styles.Field}
                    name='email'
                    component={CustomInput}
                    labelInfo='(required)'
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
          {seeComponent ? 'See Form' : 'See Custom Input'}
        </Button>
        <MdxProvider>
          {seeComponent ? <ComponentCodeBlock /> : <CodeBlock />}
        </MdxProvider>
      </div>
    </Layout>
  );
}

export default ReusableApproach;
