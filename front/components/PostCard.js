import React, { useCallback, useState } from 'react';
import { Button, ButtonGroup, Card, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  const id = me && me.id;
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setcommentFormOpened] = useState(false);
  
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev); // true/false
  }, [])

  const onToggleComment = useCallback(() => {
    setcommentFormOpened((prev) => !prev); // true/false
  }, [])

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, [])

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={ post.Images[0] && <PostImages images={post.Images} /> }
        actions={[
          <RetweetOutlined key="retweet" />,
          liked 
          ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
          : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
                {id && post.User.id === id 
                ? (
                  <>
                  <Button>수정</Button>
                  <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                  </>
                ) 
                : <Button>신고</Button> }
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
        extra={id && <FollowButton post={post} />} // 로그인 한 경우에만 팔로우버튼 보임
      >
        <Card.Meta 
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
        <Button></Button>
      </Card>

      {commentFormOpened && (
        <div>
          <CommentForm post={post} /> 
          <List 
            header={`${post.Comments ? post.Comments.length : 0}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comment}
            renderItem={(item) => (
              <li>
                <Comment 
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
}

PostCard.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images:PropTypes.arrayOf(PropTypes.object), // 객체들의 배열
  }).isRequired,
}

export default PostCard;