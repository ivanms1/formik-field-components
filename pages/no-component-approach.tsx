import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import Layout from '../components/Layout';
import MdxProvider from '../components/MdxProvider';
import CodeBlock from '../mdx/no-component-approach.mdx';

import styles from './no-component-approach.module.css';

function NoComponentApproach() {
  return (
    <Layout>
      <a
        target='_blank'
        href='https://github.com/ivanms1/formik-field-components/blob/master/pages/no-component-approach.tsx'
        className={styles.SeeCodeContainer}
      >
        <img
          src='/assets/github-logo.png'
          className={styles.GithubLogo}
          alt='github logo'
        />
      </a>
      <div className={styles.ExampleContainer}>
        <h2 className={styles.Title}>No Custom Component Approach</h2>
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
                  <label htmlFor='name'>Name</label>
                  <Field
                    id='name'
                    className={styles.Field}
                    name='name'
                    placeholder='Your Name'
                  />
                  <ErrorMessage
                    component='span'
                    className={styles.ErrorMessage}
                    name='name'
                  />
                </div>
                <div className={styles.FieldContainer}>
                  <label htmlFor='email'>Email</label>
                  <Field
                    className={styles.Field}
                    name='email'
                    placeholder='Your Email'
                  />
                  <ErrorMessage
                    component='span'
                    className={styles.ErrorMessage}
                    name='email'
                  />
                </div>
              </div>
              <button type='submit' className={styles.SubmitButton}>
                Submit
              </button>
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

export default NoComponentApproach;
