import Head from 'next/head';

import Layout from '../components/Layout';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Forms with Formik</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <a
        target='_blank'
        href='https://github.com/ivanms1/formik-field-components'
        className={styles.SeeCodeContainer}
      >
        <img
          src='/assets/github-logo.png'
          className={styles.GithubLogo}
          alt='github logo'
        />
      </a>
      <div className={styles.PageContainer}>
        <h1 className={styles.Title}>Forms with Formik</h1>
        <p className={styles.Text}>
          This is a demo site for the{' '}
          <a
            href='https://ivanms1.hashnode.dev/creating-reusable-input-components-with-formik-cke82ho6a02hzyjs1aisachpo'
            target='_blank'
          >
            Creating Reusable Input Components with Formik
          </a>{' '}
          tutorial, where we talk about the different ways you can handle inputs
          in Formik.
        </p>
        <span className={styles.Credits}>
          Made with love by{' '}
          <a href='https://github.com/ivanms1' target='_blank'>
            Ivan
          </a>
        </span>
      </div>
    </Layout>
  );
}
