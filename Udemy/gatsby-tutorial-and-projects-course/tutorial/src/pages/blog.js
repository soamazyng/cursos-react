import React from 'react';
import Layout from '../components/Layout';
import styles from '../components/blog.module.css';

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1> This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nihil
          facilis necessitatibus possimus delectus nostrum. Distinctio voluptas,
          esse ratione veritatis doloremque laboriosam quasi dolore eius totam
          officia quod quibusdam? Sed.
        </p>
      </div>
    </Layout>
  );
};

export default blog;
