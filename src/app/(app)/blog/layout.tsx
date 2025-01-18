import Navbar from "./navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="mt-4">{children}</div>
    </>
  );
}
