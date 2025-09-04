import { eventsDataType } from "@/types/dataTypes";

export const eventsData: eventsDataType[] = [
  {
    _id: 1,
    title: "Tech Innovators Summit 2025",
    description:
      "A gathering of tech leaders, startups, and innovators to discuss the future of AI, blockchain, and cloud computing, gathering of tech leaders, startups, and innovators to discuss the future of AI, blockchain, and cloud computing.",
    group: {
      organization: "Global Tech Association, ",
      mode: "Offline",
      category: "conference",
      audience: "professional",
      helpline: 8801711223344,
    },
    location: "Dhaka International Convention Center, Bangladesh",
    date: "2025-10-15",
    time: "10:00 AM - 6:00 PM",
    status: "ongoing",
    interested_people: 10,
  },
  {
    _id: 2,
    title: "Sustainable Living Workshop",
    description:
      "Interactive workshop on eco-friendly lifestyle choices, renewable energy, and sustainable community practices, gathering of tech leaders, startups, and innovators to discuss the future of AI, blockchain, and cloud computing.",
    group: {
      organization: "Green Earth Foundation",
      mode: "Hybrid",
      category: "meetup",
      audience: "beginner",
      helpline: 8801999888777,
    },
    location: "University of Barishal Auditorium & Online",
    date: "2025-11-02",
    time: "2:00 PM - 5:30 PM",
    status: "ongoing",
    interested_people: 3,
  },
  {
    _id: 3,
    title: "Digital Marketing Masterclass",
    description:
      "A masterclass to learn the latest trends in SEO, social media marketing, and content strategy from industry experts, gathering of tech leaders, startups, and innovators to discuss the future of AI, blockchain, and cloud computing.",
    group: {
      organization: "Marketing Pro Hub",
      mode: "Online",
      category: "workshop",
      audience: "all",
      helpline: 8801555666777,
    },
    location: "Zoom (link will be shared upon registration)",
    date: "2025-09-20",
    time: "7:00 PM - 9:00 PM",
    status: "completed",
    interested_people: 17,
  },
];
