import { useState } from "react";
import { FaChartBar } from "react-icons/fa";
export default function AnalyticsInput({ getAnalytics }) {
  const [analyticsUrl, setAnalyticsUrl] = useState("");
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState("");

  const handleAnalytics = async () => {
    try {
      const shortUrl = analyticsUrl.split("/").slice(-1).toString();
      const result = await getAnalytics(shortUrl);
      setAnalytics(result.totalClicks);
      setError("");
    } catch (err) {
      setError("Failed to fetch analytics. Please try again.");
      setAnalytics(null);
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center w-full max-w-lg">
      <h2 className="text-xl mb-2">
        You want analytics of your link for free, Oh Ok!{" "}
        <span role="img" aria-label="smile">
          😊
        </span>
      </h2>
      <div className="flex w-full mb-4 gap-2">
      <div class="relative w-full min-w-[200px] h-10">
        <input
          type="text"
          placeholder=""
          value={analyticsUrl}
          onChange={(e) => setAnalyticsUrl(e.target.value)}
          className="peer rounded-r-0 w-full h-16 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-red-500"
        /><label
        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Short Url
      </label>
          </div>
        <button
          onClick={handleAnalytics}
          className="px-6 py-1 bg-red-500 text-white text-lg rounded-lg hover:bg-blue-600 flex items-center"
        >
          <FaChartBar className="mr-2" /> Get Analytics
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {analytics !== null && (
        <div className="mt-4 text-lg text-blue-500">Total Clicks: {analytics}</div>
      )}
    </div>
  );
}
