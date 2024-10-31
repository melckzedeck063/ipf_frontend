import immage3 from '../assets/images/rb_53236.png'

const DashboardCard = ({ title, value, icon:Icon }) => {
    return (
      <div className="items-center bg-white rounded-lg shadow-md p-6 h-24 max-w-sm">
        <div className="flex flex-row justify-between mb-10">
        <div className="text-5xl font-bold text-gray-800">{value}</div>
        <div className=" h-16 w-16 bg-teal-600 rounded-lg p-4 justify-center items-center">
          <Icon  className="text-white text-3xl" />
            {/* <img src={immage3} alt="eBusiness Card" className="" /> */}
            </div>
        </div>
      <div>
        <div className="text-gray-600 mt-2 text-lg">{title}</div>
      </div>
      
      {/* Right Section (Icon) */}
    </div>
    );
  };
  
  export default DashboardCard;
  
  