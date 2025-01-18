import AddCompanyButton from './components/add-company-button';
// import Sidebar from './components/sidebar';

export default function Home() {
  return (
    <main>
      {/* <h1 className="text-blue-500 text-xl">
        Home page{new Date().toTimeString()}
      </h1> */}
      <AddCompanyButton />
      {/* <Sidebar /> */}
    </main>
  );
}
