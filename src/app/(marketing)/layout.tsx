export default function MarketingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <h1>Marketing Layout</h1>
      </nav>

      {children}
    </section>
  );
}
