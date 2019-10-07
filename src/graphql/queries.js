/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBadges = `query GetBadges($id: ID!) {
  getBadges(id: $id) {
    id
    name
    avatar
    complete
    owner
  }
}
`;
export const listBadgess = `query ListBadgess(
  $filter: ModelBadgesFilterInput
  $limit: Int
  $nextToken: String
) {
  listBadgess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      avatar
      complete
      owner
    }
    nextToken
  }
}
`;
