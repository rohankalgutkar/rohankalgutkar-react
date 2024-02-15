export default function InnerSection({ title, children }) {
  return (
    <div className='py-10 lg:py-20 lg:px-40'>
      <h2 className='text-3xl lg:text-5xl pb-10 sectionTitleFont'>
        {title.toUpperCase()}
      </h2>
      {children}
    </div>
  );
}
