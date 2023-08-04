import { Layout } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="p-404">
      <Head>
        <title>404 | Positivus</title>
      </Head>

      <div className="p-404__return">
        <h1>
          <span>404</span>|Pages Not Found
        </h1>
        <Link href="/" title="Home Page" className="c-button__ButtonCta">
          Return Page
        </Link>
      </div>
    </section>
  );
};
export default NotFound;
