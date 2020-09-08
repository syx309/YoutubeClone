import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Comment } from '../Model';
import { getCommentsWithIdQuery, updateComment, deleteComments } from '../video.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input('com') comment: Comment;
  temp: number;
  description: string;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo) { }

  ngOnInit(): void {
  }

  updateComment(commentId: string) {
    this.route.params.subscribe(params => {
      this.temp = +params['id'];

      console.log(commentId, this.temp);

      this.apollo.mutate({
        mutation: updateComment,
        variables: {
          id: commentId,
          description: this.description
        },
        refetchQueries: [{
          query: getCommentsWithIdQuery,
          variables: { video_id: this.temp },
        }],
      }).subscribe()
    });
  }

  deleteComment(commentId: string): void {
    this.route.params.subscribe(params => {
      this.temp = +params['id'];

      console.log(commentId, this.temp);

      this.apollo.mutate({
        mutation: deleteComments,
        variables: {
          id: commentId,
        },
        refetchQueries: [{
          query: getCommentsWithIdQuery,
          variables: { video_id: this.temp },
        }],
      }).subscribe()
    });
  }
}
