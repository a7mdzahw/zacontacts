import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contacts HomePage</title>
      </Head>
      <div className="d-flex flex-column flex-md-row  gap-2 home justify-content-center align-items-center">
        <img src="unknown.jpg" className="img-fluid mx-4" />
        <div className="text-center">
          <h1 className="display-1">Contacts</h1>
          <p className="text-muted display-5">
            Save all your Contacts in One Place
          </p>
        </div>
      </div>
    </>
  );
}
