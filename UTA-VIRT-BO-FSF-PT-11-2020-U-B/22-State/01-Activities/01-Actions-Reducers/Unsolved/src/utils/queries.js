import gql from 'graphql-tag';

export const QUERY_BOOKS = gql`
  query books {
    books {
      _id
      title
      author
      pages
      description
    }
  }
`;
