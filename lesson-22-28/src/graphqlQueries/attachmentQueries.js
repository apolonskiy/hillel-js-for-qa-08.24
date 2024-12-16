export const deleteAttachmentQuery = `mutation DeleteAttachment($input: DeleteAttachmentInput!) {
  deleteAttachment(input: $input) {
    nothing
    __typename
  }
}`