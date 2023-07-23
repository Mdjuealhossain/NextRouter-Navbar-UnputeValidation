export default function ShopLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <h1>Shop Layout</h1>
      </nav>

      {children}
    </section>
  );
}
