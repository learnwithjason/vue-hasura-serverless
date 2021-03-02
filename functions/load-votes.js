const { hasuraRequest } = require('./util/hasura');

exports.handler = async () => {
  const data = await hasuraRequest({
    query: `
      query WishlistVotes {
        votes {
          id
          votes
        }
      }
    `,
    variables: {},
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
