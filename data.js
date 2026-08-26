/*
  EDIT THIS FILE to update your portfolio content.
  Visual files are optional. Put your media inside /assets and update the "media" path.
  Supported types: image (.jpg/.png/.webp) and video (.mp4/.webm).
*/

const PORTFOLIO_DATA = {
  profile: {
    name: "Hanin Aimanda",
    email: "haninaimanda1@gmail.com",
    linkedin: "https://www.linkedin.com/",
    stats: [
      { value: "5.2K+", label: "TikTok followers" },
      { value: "1.6M+", label: "Total TikTok likes" },
      { value: "3.9M+", label: "Top video views" },
      { value: "16.1%", label: "TikTok engagement rate" }
    ],
    skills: [
      "Social Media Management", "Content Planning", "Content Creation",
      "Content Strategy", "Trend Research", "Audience Engagement",
      "Performance Analysis", "Short-Form Video", "Video Editing",
      "Video Storytelling", "Copywriting", "Photography", "Videography"
    ]
  },

  projects: [
    {
      id: "pln-01",
      category: "Freelance · Video",
      client: "PLN UP2D Sumbar",
      title: "Turning event footage into clear, engaging stories",
      description: "Informative and educational video content created for internal communication and organizational activities.",
      role: "Freelance Video Editor",
      date: "Oct 2025 – Jan 2026",
      media: [
        { type: "video", src: "assets/PLN.mp4", label: "PLN video 01" },
        { type: "video", src: "assets/PLN1.mp4", label: "PLN video 02" }
      ],
      contributions: [
        "Selected and arranged raw footage into a clear sequence.",
        "Adjusted color and audio to improve viewing consistency.",
        "Edited event recap content for earthquake simulation drills, National Electricity Day socialization events, and PLN UP2D anniversary activities.",
        "Adapted the edit to project requirements while maintaining consistent visual quality."
      ],
      results: [
        { value: "2", label: "selected video samples" },
        { value: "3", label: "event themes covered" },
        { value: "K3L", label: "collaboration team" }
      ],
      value: "Client value is demonstrated through clearer event documentation, more structured internal communication, and ready-to-share video assets. The available CV does not provide public reach or engagement metrics for these internal videos."
    },

    {
      id: "amala-01",
      category: "Internship · Social Media",
      client: "Toko Kue Amala",
      title: "Content built around products, trends, and audience response",
      description: "Social media content created to support the brand's Instagram presence through promotional ideas, product visuals, and short-form content.",
      role: "Social Media Specialist Intern",
      date: "Sep 2025 – Oct 2025",
      media: [
        { type: "image", src: "assets/amala-screenshot.jpg", label: "Amala Instagram content screenshot" },
        { type: "video", src: "assets/amala-video.mp4", label: "Amala short-form video" }
      ],
      contributions: [
        "Planned Instagram content through content calendars and visual concepts.",
        "Created short-form videos, product photos, carousel posts, and promotional content.",
        "Applied current social media trends to content ideas.",
        "Published content and reviewed audience responses to understand what resonated."
      ],
      results: [
        { value: "+44.4%", label: "peak post views" },
        { value: "+4.3%", label: "Instagram follower growth" },
        { value: "2", label: "selected visual samples" }
      ],
      value: "The available results suggest stronger content visibility and modest audience growth during the internship. For a client, the practical value is a more active Instagram presence plus content that can be evaluated and improved based on audience response."
    },

    {
      id: "sanggar-01",
      category: "Organization · Social Media",
      client: "Sanggar Ungu UKS Faterna Unand",
      title: "Keeping organizational communication consistent",
      description: "Instagram communication and visual assets created for programs, announcements, campaigns, and events.",
      role: "Head of Information and Communication",
      date: "Jul 2022 – Jun 2023",
      media: [
        { type: "image", src: "assets/Sanggar2.jpg", label: "Sanggar Ungu Instagram content screenshot" }
      ],
      contributions: [
        "Planned and managed Instagram content for programs, announcements, campaigns, and events.",
        "Produced 76 visual assets and 11 short-form videos.",
        "Coordinated with different divisions to gather information and keep content accurate.",
        "Documented activities through photography and videography for digital publication."
      ],
      results: [
        { value: "76", label: "visual assets" },
        { value: "11", label: "short-form videos" },
        { value: "1 year", label: "communication leadership" }
      ],
      value: "For an organization or client, the strongest takeaway is consistent digital communication: a steady flow of visual assets, clearer information, and coordinated content production across activities."
    },

    {
      id: "tiktok-01",
      category: "Personal Project · TikTok",
      client: "Personal TikTok — Drama & Entertainment Niche",
      title: "Learning content performance by building from zero",
      description: "A self-managed TikTok account built as a practical laboratory for trend research, content creation, audience engagement, posting experiments, and analytics.",
      role: "Content Creator · Social Media Manager",
      date: "Jan 2026 – Present",
      media: [
        { type: "image", src: "assets/tiktok-analytics.jpg", label: "TikTok analytics screenshot" },
        { type: "video", src: "assets/tiktok-video.mp4", label: "TikTok selected video" }
      ],
      contributions: [
        "Researched current trends and audience interests before creating short-form content.",
        "Created and edited short-form videos in the drama and entertainment niche.",
        "Replied to comments and interacted with the audience.",
        "Tested posting times and reviewed TikTok Analytics to identify content patterns.",
        "Used performance observations to shape future content ideas."
      ],
      results: [
        { value: "5.2K+", label: "followers" },
        { value: "1.6M+", label: "total likes" },
        { value: "3.9M+", label: "top video views" },
        { value: "16.1%", label: "engagement rate" }
      ],
      value: "This project demonstrates end-to-end social media execution: research → creation → publishing → engagement → analytics → iteration. For a client, that translates into a practical habit of learning from real audience behavior rather than relying only on assumptions."
    }
  ]
};
