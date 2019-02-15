import React from 'react';
import { propType } from 'graphql-anywhere';
import PropTypes from 'prop-types';

import emptyOrTipsFragment from 'react/pages/profile/ProfilePage/components/EmptyMessageOrComponent/fragments/emptyOrTips';

import ProfileEmptyMessage from 'react/components/ProfileEmptyMessage';

const EmptyMessageOrComponent = ({
  count: sectionCount,
  children,
  identifiable,
  ...rest
}) => {
  const isMyProfile = identifiable.is_me || identifiable.is_current_user_a_member;
  const isSectionEmpty = sectionCount <= 0;

  const components = [];

  if (isSectionEmpty) {
    const profileEmptyMessage = (
      <ProfileEmptyMessage
        key="profileEmptyMessage"
        isMine={isMyProfile}
        identifiable={identifiable}
        {...rest}
      />
    );
    components.push(profileEmptyMessage);
  }

  if (!isSectionEmpty) {
    components.push(children);
  }

  return components;
};

EmptyMessageOrComponent.propTypes = {
  count: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  identifiable: propType(emptyOrTipsFragment).isRequired,
};

export default EmptyMessageOrComponent;
