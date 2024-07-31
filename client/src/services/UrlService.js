export const handleShortUrl = async (url) => {
    try {
      const response = await fetch("http://localhost:8000/url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Network response was not ok.");
    }
  };
  
  export const getAnalytics = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/url/analytics/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Network response was not ok.");
    }
  };
  