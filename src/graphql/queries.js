/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCertificate = `query GetCertificate($id: ID!) {
  getCertificate(id: $id) {
    id
    name
    complete
    certificationUrl
    owner
  }
}
`;
export const listCertificates = `query ListCertificates(
  $filter: ModelCertificateFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      complete
      certificationUrl
      owner
    }
    nextToken
  }
}
`;
