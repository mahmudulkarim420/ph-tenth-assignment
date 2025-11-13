const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-4"></div>

        <p className="text-xl font-semibold text-blue-700 dark:text-blue-400">
          Loading BooksHaven...
        </p>
      </div>
    </div>
  );
};

export default Spinner;
