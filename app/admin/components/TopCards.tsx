import formatCurrency from "@/app/libs/formatCurrency";

function TopCards() {
  return (
    <div className="grid lg:grid-cols-6 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-2.5 lg:p-4 rounded-lg">
        <div className="flex flex-col w-full pb-2 lg:pb-4">
          <p className="text-xl lg:text-2xl font-bold">
            {formatCurrency(75299)}
          </p>
          <p className="text-gray-600 text-sm lg:text-base">Daily revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2  rounded-lg">
          <span className="text-green-700 text-sm lg:text-lg">+12%</span>
        </p>
      </div>

      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-2.5 lg:p-4 rounded-lg">
        <div className="flex flex-col w-full pb-2 lg:pb-4">
          <p className="text-xl lg:text-2xl font-bold">1,000</p>
          <p className="text-gray-600 text-sm lg:text-base">Active loans</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2  rounded-lg">
          <span className="text-green-700 text-sm lg:text-lg">+12%</span>
        </p>
      </div>

      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-2.5 lg:p-4 rounded-lg">
        <div className="flex flex-col w-full pb-2 lg:pb-4">
          <p className="text-xl lg:text-2xl font-bold">20</p>
          <p className="text-gray-600 text-sm lg:text-base">New customers</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2  rounded-lg">
          <span className="text-green-700 text-sm lg:text-lg">+12%</span>
        </p>
      </div>
    </div>
  );
}

export default TopCards;
