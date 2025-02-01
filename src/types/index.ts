export interface NFT {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: () => JSX.Element;
} 