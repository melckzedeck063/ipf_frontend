const SummaryCard = ({ title, value }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800">
        <h3 className="text-gray-600 dark:text-gray-300">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
      </div>
    );
  };
  
  export default SummaryCard;
  