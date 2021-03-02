const { hasuraRequest } = require('./util/hasura');

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);

  const data = await hasuraRequest({
    query: `
      mutation AddVote($id: String!) {
        update_votes_by_pk(pk_columns: {id: $id}, _inc: {votes: 1}) {
          id
          votes
        }
      }
    `,
    variables: {
      id,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data.update_votes_by_pk),
  };
};
