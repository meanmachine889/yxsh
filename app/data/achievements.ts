export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export const achievements: Achievement[] = [
  {
    id: "01",
    title: "Enduraverse'25 Hackathon",
    subtitle: "Achieved 2nd place among nationwide teams",
    description: "Secured 2nd place at Enduraverse'25, a national 72-hour hackathon by Endurance Technologies. Built a cross-platform fitness tracker using Flutter and ESP32 + MPU6050, featuring real-time data sync, offline mode with flash storage, and a user dashboard. Delivered a live pitch to industry judges in the final round.",
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_competed-in-enduraverse25-a-72-hour-hackathon-activity-7300228997345415168-MCHf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s"
  },
  {
    id: "02",
    title: "WebCraft Hackathon 2024",
    subtitle: "3rd Place among 350 participants",
    description: "Won 3rd place in WebCraft Hackathon hosted by Project DronAid at MIT Manipal. Advanced to the final 32 from 350 participants after a 24-hour web page cloning challenge. Built a full-featured event management platform allowing users to buy and host city events with tracked histories for both organizers and attendees.",
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_hackathon-webdevelopment-teamdronaid-activity-7187014257496973312-iz32?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s"
  },
  {
    id: "03",
    title: "VoiceAI Hackathon",
    subtitle: "Top 6 out of 345 teams worldwide",
    description: "Built YatriGPT, a smart travel voice assistant during a national hackathon by DaaS. Led frontend development and contributed to the backend with Flask and MongoDB. Selected among the top 6 teams after rounds of ideation, development, and pitching to DaaS CEO Quinton Newman.",
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_hackathonsuccess-teamwork-innovation-activity-7166847214651224064-xB92?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s"
  },
];
