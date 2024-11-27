export const getLibraryQuery = `query Library($input: LibraryInput = {}) {
  library(input: $input) {
    currentFolder {
      id
      name
      __typename
    }
    folders {
      ...FolderItem
      __typename
    }
    tracks {
      ...TrackItem
      __typename
    }
    attachments {
      ...AttachmentItem
      __typename
    }
    __typename
  }
}

fragment FolderItem on Folder {
  id
  parentId
  aclRole
  createdAt
  name
  iconUrl
  coverArtUrl
  fileCount
  owner {
    id
    ...UserDetails
    __typename
  }
  sharing {
    ...SharingInfo
    __typename
  }
  __typename
}

fragment TrackItem on Track {
  id
  folderId
  aclRole
  createdAt
  name
  iconUrl
  defaultVersion {
    id
    name
    fileExtension
    duration
    bpm
    dataUrl
    audiowaveUrl
    downloadUrl
    status
    genre {
      id
      name
      __typename
    }
    keys {
      id
      name
      __typename
    }
    scales {
      id
      name
      __typename
    }
    tags {
      id
      name
      __typename
    }
    __typename
  }
  owner {
    id
    ...UserDetails
    __typename
  }
  sharing {
    ...SharingInfo
    __typename
  }
  __typename
}

fragment AttachmentItem on Attachment {
  id
  folderId
  aclRole
  createdAt
  name
  fileExtension
  dataUrl
  downloadUrl
  owner {
    id
    ...UserDetails
    __typename
  }
  sharing {
    ...SharingInfo
    __typename
  }
  __typename
}

fragment UserDetails on User {
  email
  firstName
  lastName
  artistName
  profileImageUrl
  __typename
}

fragment SharingInfo on Sharing {
  linkAclRole
  acls {
    id
    role
    user {
      id
      ...UserDetails
      __typename
    }
    __typename
  }
  __typename
}`;
