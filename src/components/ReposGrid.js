import React from 'react';
import { Card } from './Shared/Card';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';
import ToolTip from './Shared/Tooltip';
import PropTypes from 'prop-types';

const ReposGrid = ({ repos }) => {
  return (
    <ul className="grid space-around'">
      {repos.map((repo, index) => {
        //prettier-ignore
        const {owner:{login, avatar_url},html_url,stargazers_count, forks, open_issues} = repo;
        return (
          <li key={html_url}>
            <Card
              header={`${index + 1}`}
              avatar={avatar_url}
              name={login}
              href={html_url}>
              <ul className='card-list'>
                <li>
                  <ToolTip className='Github Username'>
                    <FaUser color='rgb(255, 191, 116)' size={22} />
                    <a href={`https://github.com/${login}`}>{login}</a>
                  </ToolTip>
                </li>
                <li>
                  <FaStar color='rgb(255, 215, 0)' size={22} />
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                  {forks.toLocaleString()} forks
                </li>{' '}
                <li>
                  <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                  {open_issues.toLocaleString()} open
                </li>
              </ul>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default ReposGrid;
