import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

export const getVideosQuery = gql`
  query getVideos{
    videos{
      id,
      category,
      title,
      description,
      ageRestriction,
      viewCount,
      uploadDate,
      userId,
      video,
      thumbnail,
      likes,
      dislikes
    }
  }
  `;

export const getVideoWithIdQuery = gql`
  query getVideoWithId($video_id : Int!) {
    getVideo(id: $video_id){
      id,
      category,
      title,
      description,
      ageRestriction,
      viewCount,
      uploadDate,
      userId,
      video,
      thumbnail,
      likes,
      dislikes,
      private
    }
  }
  `;

export const getVideoOfUserQuery = gql`
  query getVideoOfUser($userId: Int!){
    getVideosByUserId(userId: $userId){
      id,
      category,
      title,
      description,
      ageRestriction,
      viewCount,
      uploadDate,
      userId,
      thumbnail,
      likes,
      dislikes
    }
  }
  `;

export const getVideoByTitle = gql`
  query getVideoByTitle($title: String!){
    getVideosByTitle(title: $title){
      id,
      title,
    }
  }
`;
export const getVideosByCategory = gql`
  query getVideoByCategory($category: String!){
    getTrendingVideosCategory(category: $category){
      id,
      category,
      title,
      description,
      ageRestriction,
      viewCount,
      uploadDate,
      userId,
      thumbnail,
      likes,
      dislikes
    }
  }
`;

export const UploadNewVideo = gql`
  mutation CreateNewVideo($category: String!, $description: String!, $title: String!,
    $ageRestriction: String!, $viewCount: Int!, $uploadDate: Time!, $userId: Int!,
    $video: String!, $thumbnail: String!, $likes: Int!, $dislikes: Int!, $private: String!) {
    createVideo(input: { category: $category, description: $description, title: $title,
    ageRestriction: $ageRestriction, viewCount: $viewCount, uploadDate: $uploadDate,
    userId: $userId, video: $video, thumbnail: $thumbnail, likes: $likes, dislikes: $dislikes, private: $private } ) {
      id
      title
      description
      video
      thumbnail
    }
  }
  `;

export const UpdateVideo = gql`
  mutation UpdateExistingVideo($id: ID!, $category: String!, $title: String!, $description: String!, $ageRestriction: String!, $private: String!){
    updateVideo(id: $id, input: { category: $category, description: $description, 
      title: $title, ageRestriction: $ageRestriction, private: $private } ) 
      {
        id,
        title,
        description,
        uploadDate
      }
  }
`;

export const DeleteVideoById = gql`
  mutation DeleteExistingVideo($id: ID!){
    deleteVideo(id: $id) 
  }
  `;

export const getCommentsWithIdQuery = gql`
  query getCommentWithVideo_Id($video_id : Int!){
    getComment(videoId: $video_id){
      id,
      description,
      likes,
      userId,
      videoId
    }
  }
  `;

export const insertComment = gql`
  mutation CreateNewComment($description: String!, $likes: Int!, $userId: Int!, $videoId: Int!) {
    createComment(input:{description:$description, likes: $likes, userId: $userId, videoId: $videoId}){
      id,
      description,
      likes,
      userId,
      videoId
    }
  }
  `;

export const deleteComments = gql`
  mutation deleteExistingComments($id: ID!){
    deleteComment(id: $id)
  }
`;

export const updateComment = gql`
  mutation updateExistingComments ($id: ID!, $description: String!){
    updateComment(id: $id, input:{description: $description})
    {
      id,
      description,
      likes,
      videoId
    }
  }
`;

export const getPlaylistbyId = gql`
  query getExistingPlaylist($id: Int!){
    getPlaylist(id: $id){
      id,
      userId,
      videoId,
      name
    }
  }
`;

export const getPlaylistbyUser = gql`
  query getExistingUserPlaylist($userId: Int!){
    getUserPlaylists(userId: $userId){
      id,
      userId,
      videoId,
      name
    }
  }
`;

export const createNewPlaylist = gql`
  mutation CreateNewPlaylist($userId: Int!, $videoId: String!, $name: String!){
    createPlaylist(input:{userId: $userId, videoId: $videoId, name: $name}){
      id,
      userId,
      videoId,
      name
    }
  }
`;

export const addVideosToPlaylist = gql`
  mutation addVideoToPlaylist($id: ID!, $videoId: String!){
    addItemToPlaylist(id: $id ,input:{videoId:$videoId}){
      id,
      userId,
      videoId,
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  constructor() { }
}
