import {useNavigate} from 'react-router-dom'

const SimplePaginator = ({ count, sendPageNumToParent, currentPage }) => {
  const pagButton = (i) => {
    sendPageNumToParent(i);
  };

  const pagList = [];
  for (let i = 1; i <= count; i++) {
    pagList.push(
      <button
        key={i}
        onClick={() => pagButton(i)}
        className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 ${
          currentPage === i
            ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {pagList}
    </div>
  );
};

export default SimplePaginator;