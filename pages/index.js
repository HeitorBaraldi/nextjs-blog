import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props:{
      allPostsData,
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Olá, meu nome é Carlos Heitor Gobbi Baraldi, sou um desenvolvedor de software.
          Para me contatar, segue meu <a href="https://www.linkedin.com/in/carlosbaraldideveloper/">Linkedin</a>.
        </p>
        <p>
          (Esse é um site simples e você pode construir um site assim utilizando o{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
          <Date dateString={date} />
          </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}