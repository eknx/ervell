import gql from 'graphql-tag';

import avatarFragment from 'v2/components/UserAvatar/fragments/userAvatar';
import memberAvatarFragment from 'v2/components/MemberAvatar/fragments/memberAvatar';

export default gql`
  fragment NewChannelGroups on Me {
    __typename
    id
    name
    ...UserAvatar
    groups(page: 1, per: 25) {
      __typename
      id
      name
      visibility
      ...MemberAvatar
    }
  }
  ${memberAvatarFragment}
  ${avatarFragment}
`;
