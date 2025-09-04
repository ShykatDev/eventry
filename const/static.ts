import type { AboutFeaturesType, SocialLinksType } from "@/types/dataTypes";
import {
  ClockIcon,
  CubeIcon,
  FaceSmileIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import {
  FaBehance,
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

// About features data using homepage--bento grid
export const aboutFeatures: AboutFeaturesType = [
  {
    icon: TruckIcon,
    label: "Seamless logistics integration",
  },
  {
    icon: CubeIcon,
    label: "Optimized delivery routes",
  },
  {
    icon: ClockIcon,
    label: "On-time every time, every project",
  },
  {
    icon: FaceSmileIcon,
    label: "Reliable Smooth Support",
  },
];

// Social links data using homepage--bento grid
export const socialLinks: SocialLinksType = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaXTwitter,
    href: "#",
  },
  {
    icon: FaBehance,
    href: "#",
  },
  {
    icon: FaDiscord,
    href: "#",
  },
];

export const modeOptions = [
  {
    label: "Online",
    value: "online",
  },
  {
    label: "Offline",
    value: "offline",
  },
];

export const categoryOptions = [
  {
    label: "Conference",
    value: "conference",
  },
  {
    label: "Workshop",
    value: "workshop",
  },
  {
    label: "Meetup",
    value: "meetup",
  },
];

export const audienceOptions = [
  {
    label: "Beginner",
    value: "beginner",
  },
  {
    label: "Professional",
    value: "professional",
  },
  {
    label: "Open for all",
    value: "all",
  },
];
