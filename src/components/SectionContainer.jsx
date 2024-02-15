export default function SectionContainer({ children, ...props }) {
  return (
    <section {...props}>
      <div className='container lg:px-32 '>{children}</div>
    </section>
  );
}
