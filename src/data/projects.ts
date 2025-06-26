export interface Project {
  id: string;
  title: string;
  desc?: string;
  category: string;
  images: string[];
  video?: string;
  poster?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Project Case",
    desc: "A modern yet cozy family home in Ikoyi featuring warm wood tones, open floor plans, and customized wardrobe fittings.",
    category: "RESIDENTIAL",
    images: [
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866688/img1_cq5o70.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866581/img2_nlgtrn.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866585/img3_rywxku.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866582/img4_yym5f0.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866584/img5_s3h9cf.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866590/img6_vzf6fp.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866589/img7_b8qb5a.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866586/img8_pjontq.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866590/img9_gvxfv4.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866590/img10_v3pe1g.png",
    ],
    video: "https://res.cloudinary.com/dzwv3fba5/video/upload/v1750866868/case-vid_olwsq2.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856945/img1_plfkbi.png",
  },
  {
    id: "2",
    title: "Project LUXE",
    desc: "A modern yet cozy family home in Ikoyi featuring warm wood tones, open floor plans, and customized wardrobe fittings.",
    category: "RESIDENTIAL",
    images: [
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866688/img1_cq5o70.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866581/img2_nlgtrn.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866585/img3_rywxku.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866582/img4_yym5f0.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866584/img5_s3h9cf.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866590/img6_vzf6fp.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866589/img7_b8qb5a.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866586/img8_pjontq.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866590/img9_gvxfv4.png",
      "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750866590/img10_v3pe1g.png",
    ],
    video: "https://res.cloudinary.com/dzwv3fba5/video/upload/v1750942080/PROJECT_LUXE_adzmmr.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856945/img1_plfkbi.png",
  },
];
