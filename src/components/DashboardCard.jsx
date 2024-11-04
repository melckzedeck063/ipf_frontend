import immage3 from '../assets/images/rb_53236.png'

const DashboardCard = ({ title, value, icon:Icon }) => {
    return (
      <div className="items-center bg-gray-700 rounded-lg shadow-md p-6 h-24 max-w-sm">
        <div className="flex flex-row justify-between mb-10">
        <div className="text-4xl font-bold text-gray-200">{value}</div>
        <div className=" h-16 w-16 bg-teal-600 rounded-lg p-4 justify-center items-center">
          <Icon  className="text-white text-3xl" />
            </div>
        </div>
      <div>
        <div className="text-gray-200 mt-2 text-xl">{title}</div>
      </div>
      
    </div>
    );
  };
  
  export default DashboardCard;
  
  