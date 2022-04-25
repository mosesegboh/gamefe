

export interface PostModel {
   id?: number;
   date?: String;
   title:String;
   content:String;
   comments?:CommentModel[]
}

export interface CommentModel {
   id: number;
   content: String;
   post_id: number;
   comment?:CommentModel[]
}