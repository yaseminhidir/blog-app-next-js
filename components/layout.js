import Head from "next/head";
import Footer from "./Footer";

import Header from "./Header";

export default function Layout({ children }) {

    return <div>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />
            <link rel="stylesheet" type="text/css" href="/styles.css" />
        </Head>
        <Header></Header>
        <div className="flex-grow-1">
        {children}
        </div>

        <Footer></Footer>
    </div>;
}