"use client";
import UrlShortener from "@/components/UrlShortener.js";
import AnalyticsInput from "@/components/AnalyticsInput.js";
import { getAnalytics, handleShortUrl } from "@/services/UrlService";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Free URL Shortener</h1>
        <p className="mt-3 text-2xl">Create short & memorable links in seconds</p>
        <UrlShortener handleShortUrl={handleShortUrl} />
        <AnalyticsInput getAnalytics={getAnalytics} />
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t mt-8">
        <p className="text-center">
          Powered by Saadix. By clicking Shorten URL, you agree to Saadix's
          <a href="https://rebrandly.com/terms" className="text-blue-500 ml-1">
            Terms of Use
          </a>
          ,{" "}
          <a href="https://rebrandly.com/privacy" className="text-blue-500 ml-1">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://rebrandly.com/cookie-policy" className="text-blue-500 ml-1">
            Cookie Policy
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
