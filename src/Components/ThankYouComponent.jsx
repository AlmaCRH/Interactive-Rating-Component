import thankYou from "../../images/illustration-thank-you.svg";

const ThankYouComponent = ({ radioData }) => {
  console.log(radioData);
  return (
    <div className="w-full sm:w-[450px] max-w-[600px] pl-3 pr-3">
      <div className="bg-gradient-to-t from-gray-900 to-gray-800 p-8 flex flex-col rounded-3xl space-y-10">
        <div className="flex justify-center items-center">
          <img src={thankYou} />
        </div>
        <div className="bg-gray-700 w-48 h-8 flex justify-center items-center self-center rounded-3xl mt">
          <p className="text-orange-400">You selected {radioData} of 5</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-white text-center text-3xl font-semibold tracking-wide">
            Thank you!
          </h1>
          <p className="text-gray-400 text-center text-lg">
            We appreciate you taking the time to give a rating. If you ever need
            more support, {"don't"} hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouComponent;
