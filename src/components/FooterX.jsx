export default function FooterX() {
  const year = new Date().getFullYear();
  return (
    <div className='py-1 bg-gradient-to-r from-orange-700 to-orange-400'>
      <p className='container text-center text-xs'>
        © {year} Copyright - Rohan Kalgutkar
        <br />
        All trademarks, logos and brand names are the property of their
        respective owners.
      </p>
    </div>
  );
}
