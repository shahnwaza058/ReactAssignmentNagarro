import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const getTimeAgo = (date) => {
  const currentDate = new Date();
  const timeDifference = currentDate - date;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hr ago" : `${hours} hrs ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 min ago" : `${minutes} mins ago`;
  } else {
    return "Just now";
  }
};

export const formatDate = (inputDate) => {
  // Create a Date object from the input string
  const date = new Date(inputDate);

  // Define month names in uppercase
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // Get the day, month, and year components
  const day = String(date.getDate()).padStart(2, "0");
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Format the date as "DD-MON-YYYY" (uppercase month)
  const formattedDate = `${day}-${monthNames[monthIndex]}-${year}`;

  return formattedDate;
};

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null; // This is a small helper component and doesn't render anything
};

export const filterBlogs = (searchQuery, blogs) => {
  // Convert the search query to lowercase for case-insensitive matching
  const query = searchQuery?.toLowerCase();

  // Use the filter() method to filter the blogs
  const filteredBlogs = blogs?.filter((blog) => {
    // Check if the title, description, or name contains the search query
    return (
      blog?.name?.toLowerCase().includes(query) ||
      blog?.category?.toLowerCase().includes(query) ||
      blog?.title?.toLowerCase().includes(query)
    );
  });

  return filteredBlogs;
};
