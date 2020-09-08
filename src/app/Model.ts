export class Video {
  id: number;
  category: string;
  description: string;
  title: string;
  ageRestriction: boolean;
  viewCount: number;
  uploadDate: Date;
  userId: number;
  video: string;
  thumbnail: string;
  likes: number;
  dislikes: number;
  private: boolean;
}

export class Comment {
  id: string;
  description: string;
  likes: number;
  user_id: number;
  video_id: number;
}

export class User {
  id: string;
  name: string;
  totalViews: number;
  premiumMember: boolean;
  joinDate: Date;
  subscriber: number;
  image: string;

  constructor(_id: string, _name: string, _totalViews: number, _premiumMember: boolean, _joinDate: Date, _subs: number, _image: string) {
    this.id = _id;
    this.name = _name;
    this.totalViews = _totalViews;
    this.premiumMember = _premiumMember;
    this.joinDate = _joinDate;
    this.subscriber = _subs;
    this.image = _image;
  }
}

export class Playlist {
  id: string;
  userId: number;
  videoId: string;
  name: string;
}