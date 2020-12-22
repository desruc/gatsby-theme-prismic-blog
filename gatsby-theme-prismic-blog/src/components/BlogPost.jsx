import React from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import Container from './Container';
import Hero from './Hero';
import SliceZone from './SliceZone';

const HeroChildren = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const BlogPost = ({ data: { prismicPost } }) => {
  const {
    data: {
      header_image: { fluid },
      post_title,
      body
    }
  } = prismicPost;

  return (
    <Layout title={post_title.text}>
      <Container>
        <Hero fade image={fluid}>
          <HeroChildren>
            <h1>{post_title.text}</h1>
          </HeroChildren>
        </Hero>
        <SliceZone sliceZone={body} />
      </Container>
    </Layout>
  );
};

export default BlogPost;
