import React from 'react';

import Layout from './Layout';
import Container from './Container';
import PostGrid from './PostGrid';
import HomepageHero from './HomepageHero';

const Homepage = ({ data: { allPrismicPost } }) => {
  const { edges: posts } = allPrismicPost;

  return (
    <Layout>
      <HomepageHero image={posts[0].node.data.header_image.fluid} />
      <Container>
        <PostGrid posts={posts} />
      </Container>
    </Layout>
  );
};

export default Homepage;
