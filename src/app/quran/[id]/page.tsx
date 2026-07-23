export default function Page({ params }) {
  const path = params?.id;
  return (
    <>
      <section className="container">{path}</section>
    </>
  );
}
