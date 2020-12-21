import React from 'react';

import Layout from './Layout';
import Container from './Container';
import PostGrid from './PostGrid';

const Homepage = ({ data: { allPrismicPost } }) => {
  const { edges: posts } = allPrismicPost;

  return (
    <Layout>
      <Container>
        <PostGrid posts={posts} />
      </Container>
    </Layout>
  );
};

export default Homepage;
