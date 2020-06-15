import axios from 'axios';
import { config } from '../config/index';

const id = config.GithubOthID;
const secretID = config.GithubSecretID;
const params = `?client_id=${id}&client_secret=${secretID}`;

//FUNCTION FOR ERROR MESSAGE
const getErrorMsg = (messgae, username) => {
  if (messgae === 'Not Found') {
    return `${username} does't exits`;
  }
  return messgae;
};

//Get Profile
export const getProfile = async (username) => {
  try {
    const profile = await axios.get(
      `https://api.github.com/users/${username}${params}`
    );
    return profile.data;
  } catch (error) {
    throw new Error(getErrorMsg(error.message, username));
  }
};

//Get Repos
export const getRepos = async (username) => {
  try {
    const repos = await axios.get(
      `https://api.github.com/users/${username}/repos${params}&per_page=100`
    );
    const check = repos.data;
    return check;
  } catch (error) {
    console.log(error);
    throw new Error(getErrorMsg(error.message, username));
  }
};

//GET START
export const getStarCount = (repos) => {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
};

//CalculateScore
export const calculateScore = (followers, repos) => {
  return followers * 3 + getStarCount(repos);
};

//getUserData
export const getUserData = async (player) => {
  const [profile, repos] = await Promise.all([
    getProfile(player),
    getRepos(player),
  ]);

  return {
    profile,
    score: calculateScore(profile.followers, repos),
  };
};

//Sort Player
export const sortPlayer = (players) => {
  return players.sort((a, b) => b.score - a.score);
};

//battle Funcition
export const battle = async (players) => {
  const results = await Promise.all([
    getUserData(players[0]),
    getUserData(players[1]),
  ]);
  // console.log('this is the api battle', results);
  return sortPlayer(results);
};

export const fetchPopulrRepos = async (language) => {
  try {
    const EndPoint = window.encodeURI(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );
    const res = await axios.get(EndPoint);
    if (!res.data.items) {
      throw new Error(res.data.message);
    }
    return res.data.items;
  } catch (error) {
    throw new Error(getErrorMsg(error.message));
  }
};
