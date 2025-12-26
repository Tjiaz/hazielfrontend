// eventsData.js - Shared events data

export const eventsData = [
  {
    id: 1,
    title: "Haziel Charity Inauguration 2024",
    host: "Haziel Charity",
    date: "October 15, 2024",
    mainImage: "/images/event2024/1.png",
    galleryImages: [
      "/images/event2024/1.png",
      "/images/event2024/3.png",
      "/images/event2024/4.png",
      "/images/event2024/5.png",
      "/images/event2024/6.png",
      "/images/event2024/7.png",
      "/images/event2024/8.png",
      "/images/event2024/9.png",
      "/images/event2024/10.png",
      "/images/event2024/11.png",
      "/images/event2024/15.png",
      "/images/event2024/17.png",
      "/images/event2024/75.png",
    ],
    videos: [
      "/images/charity2.mp4",
      "/images/charity3.mp4",
      "/images/charity5.mp4",
    ],
    description: "Launching of Haziel Charity Foundation.",
    fullDescription: "Inauguration ceremony of haziel charity foundation...",
    newsDescription: "Haziel Charity Foundation officially launched its operations in Nigeria, marking a significant milestone in its mission to serve communities in need. The launch event, held in Nigeria, brought together community leaders, supporters, and beneficiaries. The foundation aims to focus on education, healthcare, and community development initiatives across Nigeria. During the launch, several key programs were announced, including scholarship schemes for underprivileged students and healthcare support for local communities.",
    location: "Nigeria",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: 2,
    title: "Haziel Charity 2025 Outreach Programme",
    host: "Haziel Charity",
    date: "December 2, 2025",
    mainImage: "/images/Outreach.jpeg",
    galleryImages: ["/images/event2025/e1.jpeg"],
    videos: ["/images/event2025/video1.mp4", "/images/event2025/video2.mp4"],
    description: "Free Medical outreach, distribution of palliatives, widow empowerment, scholarships, etc..",
    fullDescription: "Join us for our comprehensive 2025 Outreach Programme featuring free medical outreach services, distribution of palliatives to underserved communities, widow empowerment initiatives, and scholarship opportunities for deserving students. This event aims to provide essential healthcare services, support vulnerable families, empower widows through skills training and resources, and offer educational support to children in need. Together, we're making a meaningful impact in Abakaliki, Ebonyi State.",
    newsDescription: "Join us for our comprehensive 2025 Outreach Programme featuring free medical outreach services, distribution of palliatives to underserved communities, widow empowerment initiatives, and scholarship opportunities for deserving students. This event aims to provide essential healthcare services, support vulnerable families, empower widows through skills training and resources, and offer educational support to children in need. Together, we're making a meaningful impact in Abakaliki, Ebonyi State.",
    location: "Abakaliki Nigeria",
    time: "12:00PM",
  },
];

// Helper function to get events sorted by date (most recent first)
export const getEventsSortedByDate = () => {
  return [...eventsData].sort((a, b) => {
    // Parse dates for comparison (assuming format "Month Day, Year")
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Most recent first
  });
};

// Helper function to get latest events
export const getLatestEvents = (count = 1) => {
  return getEventsSortedByDate().slice(0, count);
};

