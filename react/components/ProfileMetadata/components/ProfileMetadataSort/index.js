import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithCurrentRoute from 'react/hocs/WithCurrentRoute';

import Pocket from 'react/components/UI/Pocket';
import ProfileLinkUnlessCurrent from 'react/components/ProfileMetadata/components/ProfileLinkUnlessCurrent';

class ProfileMetadataSort extends Component {
  static propTypes = {
    currentRoute: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  isCurrentUpdatedAt = ({ currentRoute: { search: queryString } }) => {
    if (!queryString) return true; // Default sort
    return queryString.indexOf('sort=updated_at') >= 0;
  }

  isCurrentRandom = ({ currentRoute: { search: queryString } }) => {
    if (!queryString) return false;
    return queryString.indexOf('sort=random') >= 0;
  }

  render() {
    const { currentRoute: { pathname } } = this.props;

    return (
      <Pocket title="Sort">
        <ProfileLinkUnlessCurrent
          href={`${pathname}?sort=updated_at`}
          predicate={this.isCurrentUpdatedAt}
        >
          Recently updated
        </ProfileLinkUnlessCurrent>

        <ProfileLinkUnlessCurrent
          href={`${pathname}?sort=random`}
          predicate={this.isCurrentRandom}
        >
          Random
        </ProfileLinkUnlessCurrent>
      </Pocket>
    );
  }
}

export default WithCurrentRoute(ProfileMetadataSort);
