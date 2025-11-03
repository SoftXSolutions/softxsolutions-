const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-end">
        <button
          onClick={handleClick}
          aria-label="Back to top"
          className="h-10 w-10 rounded-full border border-gray-500/60 text-white flex items-center justify-center hover:border-softx-orange hover:text-softx-orange transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M12 3a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Zm-5.78 6.72a.75.75 0 0 0 1.06 1.06L12 6.06l4.72 4.72a.75.75 0 1 0 1.06-1.06l-5.25-5.25a.75.75 0 0 0-1.06 0L6.22 9.72Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BackToTop;
