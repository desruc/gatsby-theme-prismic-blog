import React from 'react';
import styled from 'styled-components';

import PostCard from './PostCard';

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const PostGrid = ({ posts }) => (
  <Grid>
    {posts.map(({ node: post }) => (
      <PostCard key={post.uid} post={post} />
    ))}
  </Grid>
);

export default PostGrid;
