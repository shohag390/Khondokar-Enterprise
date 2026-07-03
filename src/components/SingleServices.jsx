import React from "react";
import onlineApplication from "../assets/image/online-application.png";
import printingService from "../assets/image/printing-service.png";
import photocopyService from "../assets/image/photocopy-service.png";
import scanningService from "../assets/image/scanning-service.png";
import designService from "../assets/image/design-service.png";
import laminationService from "../assets/image/lamination-service.png";
import { useParams } from "react-router";
import { div } from "motion/react-client";
import {
  FaCheckCircle,
  FaClock,
  FaFileAlt,
  FaMoneyBillWave,
  FaTruck,
} from "react-icons/fa";

const services = [
  {
    id: "688c7a9e4f1b2c3d5e6f7891",
    title: "অনলাইন আবেদন",
    subtitle: "সব ধরনের সরকারি ও",
    description: "বেসরকারি আবেদন",
    image: onlineApplication,

    subServices: [
      {
        id: 1,
        title: "বার কাউন্সিল আবেদন",
        description:
          "বাংলাদেশ বার কাউন্সিল এনরোলমেন্ট, MCQ, লিখিত ও ভাইভা পরীক্ষার অনলাইন আবেদন এবং ফি জমা দেওয়ার সম্পূর্ণ সেবা প্রদান করা হয়।",
        duration: "২০-৩০ মিনিট",
        delivery: "অনলাইন",
        price: 300,
        featured: true,
        category: "Legal",
        available: true,
        requiredDocuments: [
          "জাতীয় পরিচয়পত্র (NID)",
          "পাসপোর্ট সাইজ ছবি",
          "স্বাক্ষর",
          "LL.B/LL.M সার্টিফিকেট",
          "ইন্টার্নশিপ/পিউপিলেজ সনদ",
          "মোবাইল নম্বর",
          "ইমেইল ঠিকানা",
        ],
        features: [
          "অনলাইন আবেদন ফরম পূরণ",
          "ডকুমেন্ট আপলোড",
          "আবেদন যাচাই",
          "ফি জমা দেওয়ার নির্দেশনা",
          "আবেদন সাবমিট",
          "আবেদন কপি প্রিন্ট",
        ],
      },
      {
        id: 2,
        title: "ই-পাসপোর্ট আবেদন",
        description:
          "নতুন ই-পাসপোর্ট, রি-ইস্যু ও তথ্য সংশোধনের জন্য অনলাইন আবেদন সম্পন্ন করা হয়।",
        duration: "২০-৩০ মিনিট",
        delivery: "অনলাইন",
        price: 300,
        featured: true,
        category: "Government",
        available: true,
        requiredDocuments: [
          "জাতীয় পরিচয়পত্র",
          "জন্ম নিবন্ধন",
          "মোবাইল নম্বর",
          "ইমেইল",
        ],
        features: [
          "অনলাইন ফরম পূরণ",
          "তথ্য যাচাই",
          "আবেদন সাবমিট",
          "প্রিন্ট কপি প্রদান",
        ],
      },
      {
        id: 3,
        title: "জন্ম নিবন্ধন আবেদন",
        description:
          "নতুন জন্ম নিবন্ধন, সংশোধন ও অনলাইন আবেদন সেবা প্রদান করা হয়।",
        duration: "১৫-২০ মিনিট",
        delivery: "অনলাইন",
        price: 200,
        featured: true,
        category: "Government",
        available: true,
        requiredDocuments: ["হাসপাতালের সনদ", "পিতা-মাতার NID", "মোবাইল নম্বর"],
        features: [
          "নতুন আবেদন",
          "তথ্য সংশোধন",
          "আবেদন প্রিন্ট",
          "অনলাইন সাবমিট",
        ],
      },
      {
        id: 4,
        title: "জাতীয় পরিচয়পত্র (NID)",
        description: "NID সংশোধন, তথ্য হালনাগাদ ও অনলাইন আবেদন করা হয়।",
        duration: "২০ মিনিট",
        delivery: "অনলাইন",
        price: 250,
        featured: false,
        category: "Government",
        available: true,
        requiredDocuments: ["বর্তমান NID", "প্রমাণপত্র", "মোবাইল নম্বর"],
        features: [
          "তথ্য সংশোধন",
          "ঠিকানা পরিবর্তন",
          "ছবি আপডেট",
          "অনলাইন আবেদন",
        ],
      },
      {
        id: 5,
        title: "ই-টিন (e-TIN) নিবন্ধন",
        description: "নতুন e-TIN নিবন্ধন ও প্রয়োজনীয় তথ্য সংশোধন করা হয়।",
        duration: "১৫ মিনিট",
        delivery: "অনলাইন",
        price: 350,
        featured: false,
        category: "Tax",
        available: true,
        requiredDocuments: ["NID", "মোবাইল নম্বর", "ইমেইল"],
        features: ["নতুন নিবন্ধন", "তথ্য সংশোধন", "সার্টিফিকেট ডাউনলোড"],
      },
      {
        id: 6,
        title: "চাকরির আবেদন",
        description: "সরকারি ও বেসরকারি চাকরির অনলাইন আবেদন করা হয়।",
        duration: "১০-২০ মিনিট",
        delivery: "অনলাইন",
        price: 150,
        featured: true,
        category: "Job",
        available: true,
        requiredDocuments: ["ছবি", "স্বাক্ষর", "সার্টিফিকেট", "NID"],
        features: ["ফরম পূরণ", "ডকুমেন্ট আপলোড", "ফি গাইডলাইন", "আবেদন সাবমিট"],
      },
      {
        id: 7,
        title: "বিশ্ববিদ্যালয় ভর্তি আবেদন",
        description:
          "দেশের বিভিন্ন বিশ্ববিদ্যালয় ও কলেজে অনলাইন ভর্তি আবেদন করা হয়।",

        duration: "২০ মিনিট",
        delivery: "অনলাইন",
        price: 250,
        featured: true,
        category: "Education",
        available: true,
        requiredDocuments: [
          "SSC মার্কশিট",
          "HSC মার্কশিট",
          "ছবি",
          "মোবাইল নম্বর",
        ],
        features: ["অনলাইন আবেদন", "ফি নির্দেশনা", "আবেদন প্রিন্ট"],
      },
      {
        id: 8,
        title: "ভিসা আবেদন",
        description: "বিভিন্ন দেশের ভিসা আবেদন ফরম পূরণ ও অনলাইন সাবমিট।",
        duration: "৩০-৪৫ মিনিট",
        delivery: "অনলাইন",
        price: 500,
        featured: false,
        category: "Travel",
        available: true,
        requiredDocuments: ["পাসপোর্ট", "ছবি", "ব্যাংক স্টেটমেন্ট"],
        features: ["ফরম পূরণ", "ডকুমেন্ট আপলোড", "অ্যাপয়েন্টমেন্ট বুকিং"],
      },
      {
        id: 9,
        title: "ট্রেড লাইসেন্স আবেদন",
        description: "নতুন ট্রেড লাইসেন্স ও নবায়নের জন্য অনলাইন আবেদন।",
        duration: "২৫ মিনিট",
        delivery: "অনলাইন",
        price: 450,
        featured: false,
        category: "Business",
        available: true,
        requiredDocuments: ["NID", "ছবি", "ব্যবসার ঠিকানা"],
        features: ["নতুন আবেদন", "নবায়ন", "আবেদন প্রিন্ট"],
      },
    ],
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7892",
    title: "প্রিন্টিং সার্ভিস",
    subtitle: "সাদা ও রঙিন",
    description: "কালার প্রিন্ট",
    image: printingService,

    subServices: [
      {
        id: 1,
        title: "সাদা-কালো প্রিন্ট",
        description:
          "A4 ও A3 সাইজে উচ্চমানের ব্ল্যাক অ্যান্ড হোয়াইট প্রিন্টিং সেবা।",
        duration: "৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 5,
        featured: true,
        category: "Printing",
        available: true,
        requiredDocuments: ["PDF", "Word", "Image"],
        features: [
          "উচ্চ মানের প্রিন্ট",
          "একাধিক কপি",
          "A4/A3 সাপোর্ট",
          "দ্রুত ডেলিভারি",
        ],
      },
      {
        id: 2,
        title: "কালার প্রিন্ট",
        description: "উচ্চ রেজুলেশনের রঙিন ডকুমেন্ট ও ছবি প্রিন্ট করা হয়।",
        duration: "৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 20,
        featured: true,
        category: "Printing",
        available: true,
        requiredDocuments: ["PDF", "Image"],
        features: ["HD কালার প্রিন্ট", "ফটো কোয়ালিটি", "A4/A3 সাপোর্ট"],
      },
      {
        id: 3,
        title: "ফটো প্রিন্ট",
        description: "পাসপোর্ট সাইজ ও বিভিন্ন সাইজের ছবি প্রিন্ট করা হয়।",
        duration: "১০ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 30,
        featured: true,
        category: "Photo",
        available: true,
        requiredDocuments: ["JPG", "PNG"],
        features: [
          "Glossy Paper",
          "Matte Paper",
          "Passport Size",
          "Custom Size",
        ],
      },
      {
        id: 4,
        title: "থিসিস প্রিন্ট",
        description:
          "বিশ্ববিদ্যালয়ের থিসিস ও প্রজেক্ট রিপোর্ট প্রিন্ট করা হয়।",
        duration: "২০ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 150,
        featured: false,
        category: "Education",
        available: true,
        requiredDocuments: ["PDF"],
        features: ["ডাবল সাইড প্রিন্ট", "রঙিন কভার", "উচ্চ মানের কাগজ"],
      },
      {
        id: 5,
        title: "সিভি প্রিন্ট",
        description: "পেশাদার মানের CV ও Resume প্রিন্ট করা হয়।",
        duration: "৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 10,
        featured: true,
        category: "Career",
        available: true,
        requiredDocuments: ["PDF", "Word"],
        features: ["সাদা-কালো", "কালার", "উচ্চ মানের কাগজ"],
      },
      {
        id: 6,
        title: "আইডি কার্ড প্রিন্ট",
        description: "অফিস, স্কুল ও প্রতিষ্ঠানের আইডি কার্ড প্রিন্ট করা হয়।",
        duration: "১৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 100,
        featured: false,
        category: "Card",
        available: true,
        requiredDocuments: ["Photo", "Design"],
        features: ["PVC Card", "কালার প্রিন্ট", "উচ্চ মানের ফিনিশ"],
      },
      {
        id: 7,
        title: "পোস্টার ও ব্যানার প্রিন্ট",
        description: "বিভিন্ন অনুষ্ঠানের পোস্টার ও ব্যানার প্রিন্ট করা হয়।",
        duration: "১-২ ঘণ্টা",
        delivery: "Same Day",
        price: 250,
        featured: false,
        category: "Marketing",
        available: true,
        requiredDocuments: ["PDF", "AI", "PSD"],
        features: ["বড় সাইজ", "উচ্চ রেজুলেশন", "কালার প্রিন্ট"],
      },
      {
        id: 8,
        title: "কাস্টম ডকুমেন্ট প্রিন্ট",
        description:
          "যেকোনো ধরনের অফিসিয়াল ও ব্যক্তিগত ডকুমেন্ট প্রিন্ট করা হয়।",
        duration: "৫-১০ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 10,
        featured: false,
        category: "Document",
        available: true,
        requiredDocuments: ["PDF", "Word", "Excel"],
        features: [
          "Single Side",
          "Double Side",
          "A4/A3 Support",
          "Multiple Copies",
        ],
      },
    ],
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7893",
    title: "ফটোকপি সার্ভিস",
    subtitle: "সাদা-কালার ও",
    description: "কালার কপি",
    image: photocopyService,

    subServices: [
      {
        id: 1,
        title: "সাদা-কালো ফটোকপি",
        description:
          "A4 ও A3 সাইজে দ্রুত এবং পরিষ্কার ব্ল্যাক অ্যান্ড হোয়াইট ফটোকপি করা হয়।",
        duration: "২-৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 2,
        featured: true,
        category: "Photocopy",
        available: true,
        requiredDocuments: ["মূল ডকুমেন্ট"],
        features: [
          "High Quality Copy",
          "Single Side",
          "Double Side",
          "Bulk Copy",
        ],
      },
      {
        id: 2,
        title: "কালার ফটোকপি",
        description:
          "রঙিন ডকুমেন্ট, সার্টিফিকেট ও অন্যান্য কাগজপত্রের কালার কপি করা হয়।",
        duration: "৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 15,
        featured: true,
        category: "Photocopy",
        available: true,
        requiredDocuments: ["মূল ডকুমেন্ট"],
        features: ["HD Color Copy", "A4/A3 Support", "Multiple Copies"],
      },
      {
        id: 3,
        title: "NID ফটোকপি",
        description: "জাতীয় পরিচয়পত্রের সাদা-কালো ও কালার কপি করা হয়।",
        duration: "২ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 5,
        featured: true,
        category: "Identity",
        available: true,
        requiredDocuments: ["NID Card"],
        features: ["Front & Back Copy", "Clear Print", "Multiple Copies"],
      },
      {
        id: 4,
        title: "পাসপোর্ট ফটোকপি",
        description: "পাসপোর্টের সকল প্রয়োজনীয় পৃষ্ঠার পরিষ্কার কপি করা হয়।",
        duration: "৩ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 10,
        featured: false,
        category: "Travel",
        available: true,
        requiredDocuments: ["Passport"],
        features: ["Color Copy", "Black & White Copy", "Multiple Copies"],
      },
      {
        id: 5,
        title: "সার্টিফিকেট ফটোকপি",
        description: "SSC, HSC, Honours ও অন্যান্য সার্টিফিকেটের কপি করা হয়।",
        duration: "৩ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 5,
        featured: true,
        category: "Education",
        available: true,
        requiredDocuments: ["Original Certificate"],
        features: ["Clear Copy", "A4 Size", "Bulk Copy"],
      },
      {
        id: 6,
        title: "মার্কশিট ফটোকপি",
        description:
          "শিক্ষা বোর্ড ও বিশ্ববিদ্যালয়ের মার্কশিটের ফটোকপি করা হয়।",
        duration: "৩ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 5,
        featured: false,
        category: "Education",
        available: true,
        requiredDocuments: ["Original Marksheet"],
        features: ["HD Copy", "Multiple Copies"],
      },
      {
        id: 7,
        title: "বই ও নোট ফটোকপি",
        description:
          "বই, নোট ও বিভিন্ন শিক্ষামূলক কাগজপত্রের বাল্ক ফটোকপি করা হয়।",
        duration: "১০-৩০ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 2,
        featured: false,
        category: "Education",
        available: true,
        requiredDocuments: ["Book / Notes"],
        features: ["Bulk Copy", "Double Side", "Fast Service"],
      },
      {
        id: 8,
        title: "লিগ্যাল ডকুমেন্ট ফটোকপি",
        description:
          "এফিডেভিট, দলিল, চুক্তিপত্র ও অন্যান্য আইনি কাগজপত্রের ফটোকপি করা হয়।",
        duration: "৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 10,
        featured: false,
        category: "Legal",
        available: true,
        requiredDocuments: ["Original Document"],
        features: [
          "High Resolution",
          "Confidential Service",
          "Multiple Copies",
        ],
      },
    ],
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7894",
    title: "স্ক্যানিং সার্ভিস",
    subtitle: "ডকুমেন্ট ও ছবি",
    description: "স্ক্যান করুন",
    image: scanningService,

    subServices: [
      {
        id: 1,
        title: "ডকুমেন্ট স্ক্যান",
        description:
          "যেকোনো অফিসিয়াল ও ব্যক্তিগত ডকুমেন্ট উচ্চ রেজোলিউশনে স্ক্যান করা হয়।",
        duration: "৩-৫ মিনিট",
        delivery: "PDF / JPG",
        price: 10,
        featured: true,
        category: "Scanning",
        available: true,
        requiredDocuments: ["মূল ডকুমেন্ট"],
        features: [
          "High Resolution",
          "PDF Format",
          "JPG Format",
          "Email Delivery",
        ],
      },
      {
        id: 2,
        title: "জাতীয় পরিচয়পত্র (NID) স্ক্যান",
        description:
          "NID কার্ডের সামনে ও পিছনের অংশ পরিষ্কারভাবে স্ক্যান করা হয়।",
        duration: "২ মিনিট",
        delivery: "PDF / JPG",
        price: 10,
        featured: true,
        category: "Identity",
        available: true,
        requiredDocuments: ["NID Card"],
        features: ["Front & Back Scan", "HD Quality", "Instant Delivery"],
      },
      {
        id: 3,
        title: "পাসপোর্ট স্ক্যান",
        description:
          "পাসপোর্টের প্রয়োজনীয় পৃষ্ঠা স্ক্যান করে PDF অথবা JPG ফাইলে প্রদান করা হয়।",
        duration: "৩ মিনিট",
        delivery: "PDF / JPG",
        price: 20,
        featured: true,
        category: "Travel",
        available: true,
        requiredDocuments: ["Passport"],
        features: ["HD Scan", "Multiple Pages", "Email Support"],
      },
      {
        id: 4,
        title: "সার্টিফিকেট স্ক্যান",
        description:
          "শিক্ষা সনদ, প্রশিক্ষণ সনদ ও অন্যান্য সার্টিফিকেট স্ক্যান করা হয়।",
        duration: "৩ মিনিট",
        delivery: "PDF",
        price: 15,
        featured: false,
        category: "Education",
        available: true,
        requiredDocuments: ["Original Certificate"],
        features: ["Color Scan", "Black & White Scan", "High Resolution"],
      },
      {
        id: 5,
        title: "ছবি স্ক্যান",
        description: "পুরোনো ছবি ও ফটোগ্রাফ ডিজিটাল ফরম্যাটে স্ক্যান করা হয়।",
        duration: "৫ মিনিট",
        delivery: "JPG / PNG",
        price: 30,
        featured: false,
        category: "Photo",
        available: true,
        requiredDocuments: ["Original Photo"],
        features: ["HD Image", "Color Correction", "Digital Copy"],
      },
      {
        id: 6,
        title: "বই ও নোট স্ক্যান",
        description: "বই, নোট ও শিক্ষামূলক কাগজপত্র PDF আকারে স্ক্যান করা হয়।",
        duration: "১০-৩০ মিনিট",
        delivery: "PDF",
        price: 50,
        featured: false,
        category: "Education",
        available: true,
        requiredDocuments: ["Book / Notes"],
        features: ["Multiple Pages", "PDF Merge", "HD Scan"],
      },
      {
        id: 7,
        title: "লিগ্যাল ডকুমেন্ট স্ক্যান",
        description:
          "দলিল, এফিডেভিট, চুক্তিপত্র ও অন্যান্য আইনি কাগজপত্র স্ক্যান করা হয়।",
        duration: "৫ মিনিট",
        delivery: "PDF",
        price: 20,
        featured: false,
        category: "Legal",
        available: true,
        requiredDocuments: ["Original Document"],
        features: ["High Quality", "Secure Handling", "Email Delivery"],
      },
      {
        id: 8,
        title: "মাল্টিপেজ PDF তৈরি",
        description:
          "একাধিক স্ক্যান করা পৃষ্ঠা একত্র করে একটি PDF ফাইল তৈরি করা হয়।",
        duration: "৫-১০ মিনিট",
        delivery: "PDF",
        price: 30,
        featured: true,
        category: "Scanning",
        available: true,
        requiredDocuments: ["স্ক্যানকৃত ডকুমেন্ট"],
        features: [
          "Merge PDF",
          "Page Arrangement",
          "High Quality",
          "Instant Delivery",
        ],
      },
    ],
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7895",
    title: "ডিজাইন সার্ভিস",
    subtitle: "ভিজিটিং কার্ড, ব্যানার,",
    description: "লোগো ও অন্যান্য",
    image: designService,

    subServices: [
      {
        id: 1,
        title: "লোগো ডিজাইন",
        description:
          "ব্যবসা, প্রতিষ্ঠান ও ব্যক্তিগত ব্র্যান্ডের জন্য আধুনিক ও ইউনিক লোগো ডিজাইন করা হয়।",
        duration: "১-২ দিন",
        delivery: "JPG, PNG, PDF",
        price: 500,
        featured: true,
        category: "Branding",
        available: true,
        requiredDocuments: ["ব্যবসার নাম", "পছন্দের রঙ"],
        features: [
          "Modern Design",
          "High Resolution",
          "Transparent PNG",
          "Printable File",
        ],
      },
      {
        id: 2,
        title: "ভিজিটিং কার্ড ডিজাইন",
        description: "প্রফেশনাল ও আকর্ষণীয় বিজনেস কার্ড ডিজাইন করা হয়।",
        duration: "২-৩ ঘণ্টা",
        delivery: "AI, PDF, JPG",
        price: 300,
        featured: true,
        category: "Printing Design",
        available: true,
        requiredDocuments: ["নাম", "মোবাইল নম্বর", "ঠিকানা", "লোগো"],
        features: ["Front & Back Design", "Print Ready", "High Resolution"],
      },
      {
        id: 3,
        title: "ফ্লায়ার ডিজাইন",
        description: "ব্যবসা, অফার ও প্রচারণার জন্য আকর্ষণীয় ফ্লায়ার ডিজাইন।",
        duration: "৪-৬ ঘণ্টা",
        delivery: "PDF, JPG",
        price: 400,
        featured: false,
        category: "Marketing",
        available: true,
        requiredDocuments: ["লোগো", "ছবি", "কনটেন্ট"],
        features: ["Single/Double Side", "Print Ready", "Custom Size"],
      },
      {
        id: 4,
        title: "পোস্টার ডিজাইন",
        description: "অনুষ্ঠান, সেমিনার ও ব্যবসার জন্য পোস্টার ডিজাইন করা হয়।",
        duration: "৫-৬ ঘণ্টা",
        delivery: "PDF, PNG",
        price: 500,
        featured: true,
        category: "Marketing",
        available: true,
        requiredDocuments: ["ছবি", "লোগো", "লেখা"],
        features: ["HD Quality", "Print Ready", "Social Media Version"],
      },
      {
        id: 5,
        title: "ব্যানার ডিজাইন",
        description: "অনলাইন ও অফলাইনের জন্য ব্যানার ডিজাইন করা হয়।",
        duration: "৪ ঘণ্টা",
        delivery: "PNG, PDF",
        price: 450,
        featured: true,
        category: "Advertising",
        available: true,
        requiredDocuments: ["ছবি", "লোগো", "সাইজ"],
        features: ["Facebook Cover", "Web Banner", "Flex Banner"],
      },
      {
        id: 6,
        title: "আইডি কার্ড ডিজাইন",
        description: "স্কুল, কলেজ, অফিস ও প্রতিষ্ঠানের আইডি কার্ড ডিজাইন।",
        duration: "২ ঘণ্টা",
        delivery: "PDF, AI",
        price: 250,
        featured: false,
        category: "Identity",
        available: true,
        requiredDocuments: ["ছবি", "নাম", "পদবি", "লোগো"],
        features: ["Front & Back", "Print Ready", "PVC Compatible"],
      },
      {
        id: 7,
        title: "সোশ্যাল মিডিয়া পোস্ট ডিজাইন",
        description:
          "Facebook, Instagram ও অন্যান্য সোশ্যাল মিডিয়ার জন্য পোস্ট ডিজাইন।",
        duration: "২-৩ ঘণ্টা",
        delivery: "PNG, JPG",
        price: 300,
        featured: true,
        category: "Social Media",
        available: true,
        requiredDocuments: ["লোগো", "ছবি", "কনটেন্ট"],
        features: ["Facebook Post", "Instagram Post", "Story Design"],
      },
      {
        id: 8,
        title: "সিভি (CV) ডিজাইন",
        description: "আধুনিক ও ATS-Friendly CV এবং Resume ডিজাইন করা হয়।",
        duration: "২ ঘণ্টা",
        delivery: "PDF, Word",
        price: 350,
        featured: false,
        category: "Career",
        available: true,
        requiredDocuments: ["ব্যক্তিগত তথ্য", "শিক্ষাগত যোগ্যতা", "অভিজ্ঞতা"],
        features: ["Professional Layout", "Editable File", "Print Ready"],
      },
    ],
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7896",
    title: "লেমিনেশন",
    subtitle: "আইডি কার্ড, সার্টিফিকেট",
    description: "লেমিনেশন",
    image: laminationService,

    subServices: [
      {
        id: 1,
        title: "সার্টিফিকেট লেমিনেশন",
        description:
          "শিক্ষাগত ও প্রশিক্ষণ সার্টিফিকেট নিরাপদে সংরক্ষণের জন্য উন্নত মানের লেমিনেশন করা হয়।",
        duration: "৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 50,
        featured: true,
        category: "Certificate",
        available: true,
        requiredDocuments: ["মূল সার্টিফিকেট"],
        features: [
          "Water Resistant",
          "Dust Protection",
          "Glossy Finish",
          "Long Lasting",
        ],
      },
      {
        id: 2,
        title: "আইডি কার্ড লেমিনেশন",
        description:
          "স্কুল, কলেজ, অফিস ও ব্যক্তিগত আইডি কার্ড লেমিনেশন করা হয়।",
        duration: "৩ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 30,
        featured: true,
        category: "Identity",
        available: true,
        requiredDocuments: ["আইডি কার্ড"],
        features: ["Pocket Size", "Glossy Finish", "Water Resistant"],
      },
      {
        id: 3,
        title: "ছবি লেমিনেশন",
        description: "পাসপোর্ট সাইজ থেকে বড় ছবি পর্যন্ত লেমিনেশন করা হয়।",
        duration: "৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 40,
        featured: false,
        category: "Photo",
        available: true,
        requiredDocuments: ["ছবি"],
        features: ["High Gloss", "Scratch Protection", "Long Lasting"],
      },
      {
        id: 4,
        title: "A4 ডকুমেন্ট লেমিনেশন",
        description: "A4 সাইজের যেকোনো গুরুত্বপূর্ণ ডকুমেন্ট লেমিনেশন করা হয়।",
        duration: "৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 60,
        featured: true,
        category: "Document",
        available: true,
        requiredDocuments: ["A4 ডকুমেন্ট"],
        features: ["Premium Film", "Waterproof", "Professional Finish"],
      },
      {
        id: 5,
        title: "A3 ডকুমেন্ট লেমিনেশন",
        description:
          "A3 সাইজের চার্ট, সার্টিফিকেট ও অন্যান্য ডকুমেন্ট লেমিনেশন করা হয়।",
        duration: "৮ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 120,
        featured: false,
        category: "Document",
        available: true,
        requiredDocuments: ["A3 ডকুমেন্ট"],
        features: ["Large Size", "Premium Finish", "Long Protection"],
      },
      {
        id: 6,
        title: "মেনু কার্ড লেমিনেশন",
        description:
          "রেস্টুরেন্ট ও ক্যাফের মেনু কার্ড দীর্ঘদিন ব্যবহারের জন্য লেমিনেশন করা হয়।",
        duration: "১০ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 80,
        featured: false,
        category: "Business",
        available: true,
        requiredDocuments: ["মেনু কার্ড"],
        features: ["Waterproof", "Easy to Clean", "Premium Look"],
      },
      {
        id: 7,
        title: "ভিজিটিং কার্ড লেমিনেশন",
        description:
          "ব্যবসায়িক ভিজিটিং কার্ড ম্যাট বা গ্লসি ফিনিশে লেমিনেশন করা হয়।",
        duration: "১০ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 100,
        featured: false,
        category: "Business",
        available: true,
        requiredDocuments: ["ভিজিটিং কার্ড"],
        features: ["Matte Finish", "Glossy Finish", "Premium Quality"],
      },
      {
        id: 8,
        title: "কাস্টম সাইজ লেমিনেশন",
        description:
          "গ্রাহকের প্রয়োজন অনুযায়ী বিভিন্ন কাস্টম সাইজে লেমিনেশন সেবা প্রদান করা হয়।",
        duration: "১০-১৫ মিনিট",
        delivery: "তাৎক্ষণিক",
        price: 150,
        featured: true,
        category: "Custom",
        available: true,
        requiredDocuments: ["ডকুমেন্ট বা ছবি"],
        features: [
          "Custom Size",
          "Premium Film",
          "High Durability",
          "Professional Finish",
        ],
      },
    ],
  },
];

const SingleServices = () => {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);
  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Service Not Found</h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <img
          src={service.image}
          alt={service.title}
          className="w-24 h-24 mx-auto mb-5"
        />

        <h2 className="text-4xl font-bold">{service.title}</h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          {service.description}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.subServices.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{item.title}</h3>

              {item.featured && (
                <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                  জনপ্রিয়
                </span>
              )}
            </div>

            <p className="text-gray-600 text-sm leading-7">
              {item.description}
            </p>

            <div className="border-t my-5"></div>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <FaClock className="text-blue-500" />
                <span>{item.duration}</span>
              </p>

              <p className="flex items-center gap-2">
                <FaTruck className="text-green-500" />
                <span>{item.delivery}</span>
              </p>

              <p className="flex items-center gap-2">
                <FaMoneyBillWave className="text-orange-500" />
                <span>৳ {item.price}</span>
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold flex items-center gap-2">
                <FaFileAlt />
                প্রয়োজনীয় কাগজপত্র
              </h4>

              <ul className="mt-2 space-y-2">
                {item.requiredDocuments.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <FaCheckCircle className="text-green-500 text-xs" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">এই সার্ভিসে যা থাকছে</h4>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleServices;
