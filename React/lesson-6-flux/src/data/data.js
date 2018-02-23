import React from 'react';
import axios from 'axios';

let users = [];

axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    let { data } = response;
    data.forEach(item => {users.push(item)});
  });

let userPosts = [];

axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    let { data } = response;
    data.forEach(item => {userPosts.push(item)});
  });

const ColorSwitcherStyle = {
  padding: '13px 12px 14px',
  marginLeft: '10px',
  color: 'green',
  textShadow:`
      -0 -1px 2px #FFFFFF, 0 -1px 2px #FFFFFF, -0 1px 2px #FFFFFF, 0 1px 2px #FFFFFF,
      -1px -0 2px #FFFFFF, 1px -0 2px #FFFFFF, -1px 0 2px #FFFFFF, 1px 0 2px #FFFFFF`,
  fontWeight: '700',
  background: `
      repeating-linear-gradient(45deg, transparent, transparent 1em, #5A9C6E 0, #5A9C6E 2em,
      transparent 0, transparent 3em, #A8BF5A 0, #A8BF5A 4em, transparent 0, transparent 5em, #FAC46E 0, #FAC46E 6em,
      transparent 0, transparent 7em, #FABB 0, #FAD5BB 8em), 
      repeating-linear-gradient(-45deg,transparent, transparent 1em, #A8BF5A 0,#A8BF5A 2em,
      transparent 0, transparent 3em, #FABB 0, #FAD5BB 4em, transparent 0, transparent 5em, #FAC46E 0, #FAC46E 6em), 
      #F2FEFF`,
  backgroundBlendMode: 'multiply'
};
const postsRow1 = [
  {
    header: <h4>Subheading</h4>,
    text: <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
  },
  {
    header: <h4>Subheading</h4>,
    text: <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
      fermentum.</p>
  },
  {
    header: <h4>Subheading</h4>,
    text: <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
  }];
const postsRow2 = [
  {
    header: <h4>Subheading</h4>,
    text: <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
  },
  {
    header: <h4>Subheading</h4>,
    text: <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
      fermentum.</p>
  },
  {
    header: <h4>Subheading</h4>,
    text: <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
  }];

export default {jumbotronSwitcher: ColorSwitcherStyle, postsRow1: postsRow1, postsRow2: postsRow2, users: users, userPosts: userPosts};