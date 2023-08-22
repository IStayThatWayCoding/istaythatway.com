import Head from 'next/head';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({
  children,
  title = '',
                               }) {
  return (
      <>
          <Head>
              <meta charSet="UTF-8"/>
              <title>IStayThatWay {title && `- ${title}`}</title>
              <meta name="description" content="Information about IStayThatWay" />
              <meta name="keywords" content="HTML,CSS,JavaScript,Python,SQL,MySQL,PostgreSQL,MongoDB,Redis,Flask,Falcon,Tailwind,TailwindCSS,Bootstrap" />
              <meta name="author" content="IStayThatWay" />
              <link rel="icon" href="/favicon.ico" />
              <meta property="og:title" content={`IStayThatWay${title && ` - ${title}`}`} />
              <meta property="og:description" content="Information about IStayThatWay" />
              <meta property="og:image" content="https://istaythatway.com/logo.webp" />
              <meta name="theme-color" content="#A855F7" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@IStayThatWay" />
              <meta name="twitter:title" content={`IStayThatWay${title && ` - ${title}`}`} />
              <meta name="twitter:description" content="Information about IStayThatWay"/>
              <meta name="twitter:image" content="https://istaythatway.com/logo.webp"/>
          </Head>
          <div className="flex flex-col min-h-screen">
              <Navbar />
              {children}
              <Footer />
          </div>
      </>
  )
}
