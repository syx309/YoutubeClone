package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"Go_Graphql/graph/generated"
	"Go_Graphql/graph/model"
	"context"
	"errors"
	"fmt"
	"log"
	"strings"
)

func (r *mutationResolver) CreateVideo(ctx context.Context, input *model.NewVideo) (*model.Video, error) {
	videos := model.Video{
		Category:       input.Category,
		Title:          input.Title,
		Description:    input.Description,
		AgeRestriction: input.AgeRestriction,
		ViewCount:      input.ViewCount,
		UploadDate:     input.UploadDate,
		UserID:         input.UserID,
		Video:          input.Video,
		Thumbnail:      input.Thumbnail,
		Likes:          input.Likes,
		Dislikes:       input.Dislikes,
		Private:        input.Private,
	}

	_, err := r.DB.Model(&videos).Insert()

	if err != nil {
		return nil, errors.New("failed to query videos")
	}
	return &videos, nil
}

func (r *mutationResolver) UpdateVideo(ctx context.Context, id string, input *model.UpdateVideo) (*model.Video, error) {
	var videos model.Video

	err := r.DB.Model(&videos).Where("id = ?", id).First()
	if err != nil {
		return nil, errors.New("failed to query videos")
	}

	videos.Category = input.Category
	videos.Title = input.Title
	videos.Description = input.Description
	videos.AgeRestriction = input.AgeRestriction
	videos.Private = input.Private

	_, error := r.DB.Model(&videos).Where("id = ?", id).Update()
	if error != nil {
		return nil, error
	}

	return &videos, nil
}

func (r *mutationResolver) DeleteVideo(ctx context.Context, id string) (bool, error) {
	var videos model.Video

	err := r.DB.Model(&videos).Where("id = ?", id).First()
	if err != nil {
		return false, err
	}

	_, error := r.DB.Model(&videos).Where("id = ?", id).Delete()
	if error != nil {
		return false, nil
	}

	return true, nil
}

func (r *mutationResolver) CreateComment(ctx context.Context, input *model.NewComment) (*model.Comment, error) {
	comments := model.Comment{
		Description: input.Description,
		Likes:       input.Likes,
		UserID:      input.UserID,
		VideoID:     input.VideoID,
	}

	_, err := r.DB.Model(&comments).Insert()

	if err != nil {
		return nil, errors.New("failed to create comments")
	}
	return &comments, nil
}

func (r *mutationResolver) UpdateComment(ctx context.Context, id string, input *model.UpdateComment) (*model.Comment, error) {
	var comments model.Comment

	err := r.DB.Model(&comments).Where("id = ?", id).First()
	if err != nil {
		return nil, errors.New("failed to query comments")
	}

	comments.Description = input.Description

	_, error := r.DB.Model(&comments).Where("id = ?", id).Update()
	if error != nil {
		return nil, error
	}

	return &comments, nil
}

func (r *mutationResolver) DeleteComment(ctx context.Context, id string) (bool, error) {
	var comments model.Comment

	err := r.DB.Model(&comments).Where("id = ?", id).First()
	if err != nil {
		return false, err
	}

	_, error := r.DB.Model(&comments).Where("id = ?", id).Delete()
	if error != nil {
		return false, nil
	}

	return true, nil
}

func (r *mutationResolver) CreatePlaylist(ctx context.Context, input *model.NewPlaylist) (*model.Playlist, error) {
	playlists := model.Playlist{
		UserID:  input.UserID,
		VideoID: input.VideoID,
		Name:    input.Name,
	}

	_, err := r.DB.Model(&playlists).Insert()

	if err != nil {
		return nil, errors.New("failed to create new playlist")
	}
	return &playlists, nil
}

func (r *mutationResolver) AddItemToPlaylist(ctx context.Context, id string, input *model.NewPlaylistItem) (*model.Playlist, error) {
	var playlists model.Playlist

	err := r.DB.Model(&playlists).Where("id = ?", id).First()
	if err != nil {
		return nil, errors.New("failed to query playlist")
	}
	//playlists.VideoID = input.VideoID

	_, error := r.DB.Query(&playlists, `UPDATE playlists SET video_id= video_id || ? WHERE id = ?`,
		input.VideoID, id)
	//_, error := r.DB.Model(&playlists).Where("id = ?", id).Update()
	if error != nil {
		return nil, errors.New("query add new item to playlist failed")
	}

	return &playlists, nil
}

func (r *mutationResolver) DeletePlaylist(ctx context.Context, id string) (bool, error) {
	var playlists model.Playlist

	err := r.DB.Model(&playlists).Where("id = ?", id).First()
	if err != nil {
		return false, err
	}

	_, error := r.DB.Model(&playlists).Where("id = ?", id).Delete()
	if error != nil {
		return false, nil
	}

	return true, nil
}

func (r *queryResolver) Videos(ctx context.Context) ([]*model.Video, error) {
	var videos []*model.Video
	err := r.DB.Model(&videos).Select()
	//_, err := r.DB.Query(&videos, `SELECT * FROM videos`)

	log.Print(err)
	if err != nil {
		return nil, errors.New("failed to query videos")
	}
	return videos, nil
}

func (r *queryResolver) GetVideo(ctx context.Context, id int) (*model.Video, error) {
	var videos model.Video
	err := r.DB.Model(&videos).Where("id = ?", id).Select()
	//_, err := r.DB.Query(&videos, `SELECT * FROM videos WHERE id=id`)
	if err != nil {
		return nil, errors.New("failed to query get Video")
	}
	return &videos, nil
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	var users []*model.User
	_, err := r.DB.Query(&users, `SELECT * FROM users`)

	log.Print(users)
	if err != nil {
		return nil, err
	}
	return users, nil
}

func (r *queryResolver) GetUser(ctx context.Context, id int) (*model.User, error) {
	var users model.User
	err := r.DB.Model(&users).Where("id = ?", id).Select()
	//_, err := r.DB.Query(&videos, `SELECT * FROM users WHERE id=id`)
	if err != nil {
		return nil, errors.New("failed to query get Video")
	}
	return &users, nil
}

func (r *queryResolver) Comments(ctx context.Context) ([]*model.Comment, error) {
	var comments []*model.Comment
	_, err := r.DB.Query(&comments, `SELECT * FROM comments`)

	log.Print(comments)
	if err != nil {
		return nil, err
	}
	return comments, nil
}

func (r *queryResolver) GetComment(ctx context.Context, videoID int) ([]*model.Comment, error) {
	var comments []*model.Comment
	err := r.DB.Model(&comments).Where("video_id = ?", videoID).Select()
	//_, err := r.DB.Query(&videos, `SELECT * FROM videos WHERE id=id`)
	if err != nil {
		return nil, errors.New("failed to query get Comment")
	}
	return comments, nil
}

func (r *queryResolver) GetTrendingVideosCategory(ctx context.Context, category string) ([]*model.Video, error) {
	var videos []*model.Video

	if !(strings.EqualFold(category, "music") ||
		strings.EqualFold(category, "food") ||
		strings.EqualFold(category, "gaming")) {
		return nil, errors.New("category must be music, food or gaming")
	}
	//err := r.DB.Model(&videos).Limit(20).Where("lower(category) = ?", category).Select()
	err := r.DB.Model(&videos).Where("lower(category) = ?", category).Select()
	if err != nil {
		return nil, errors.New("failed to query trending category videos")
	}
	return videos, nil
}

func (r *queryResolver) GetVideosByUserID(ctx context.Context, userID int) ([]*model.Video, error) {
	var videos []*model.Video
	err := r.DB.Model(&videos).Where("user_id = ?", userID).Select()

	if err != nil {
		return nil, errors.New("failed to query user videos")
	}
	return videos, nil
}

func (r *queryResolver) GetVideosByTitle(ctx context.Context, title string) ([]*model.Video, error) {
	var videos []*model.Video
	err := r.DB.Model(&videos).Where("lower(title) like lower(?)", title).Select()

	if err != nil {
		return nil, errors.New("failed to query videos by title")
	}
	return videos, nil
}

func (r *queryResolver) GetPlaylist(ctx context.Context, id int) (*model.Playlist, error) {
	var playlists model.Playlist
	err := r.DB.Model(&playlists).Where("id = ?", id).Select()
	//_, err := r.DB.Query(&videos, `SELECT * FROM users WHERE id=id`)
	if err != nil {
		return nil, errors.New("failed to query get playlist")
	}
	return &playlists, nil
}

func (r *queryResolver) GetUserPlaylists(ctx context.Context, userID int) ([]*model.Playlist, error) {
	var playlists []*model.Playlist
	err := r.DB.Model(&playlists).Where("id = ?", userID).Select()
	//_, err := r.DB.Query(&videos, `SELECT * FROM users WHERE id=id`)
	if err != nil {
		return nil, errors.New("failed to query get user playlist")
	}
	return playlists, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *queryResolver) GetPlaylistVideos(ctx context.Context, id int) (*model.Playlist, error) {
	panic(fmt.Errorf("not implemented"))
}
