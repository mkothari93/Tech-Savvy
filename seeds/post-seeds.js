const { Post } = require('../models');

const postdata = [
  {
    title: 'JavaScript? It Is Easy If You Do It Smart',
    post_body: 'Quis imperdiet massa tincidunt nunc. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus.',
    user_id: 10
  },
  {
    title: 'JavaScript Adventures',
    post_body: 'A condimentum vitae sapien pellentesque habitant morbi tristique senectus.',
    user_id: 8
  },
  {
    title: 'There is Big Money In React',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1
  },
  {
    title: 'The Ultimate Guide To Mongoose',
    post_body: 'A condimentum vitae sapien pellentesque habitant morbi tristique senectus.',
    user_id: 4
  },
  {
    title: 'Take The Stress Out Of NODE.JS',
    post_body: 'Molestie nunc non blandit massa enim nec dui nunc mattis.',
    user_id: 7
  },
  {
    title: 'Boost Your Mongoose With These Tips',
    post_body: 'Viverra accumsan in nisl nisi scelerisque.',
    user_id: 4
  },
  {
    title: 'React Expert Interview',
    post_body: 'In ornare quam viverra orci sagittis eu volutpat odio. Senectus et netus et malesuada fames ac.',
    user_id: 1
  },
  {
    title: 'Succeed With JavaScript In 24 Hours',
    post_body: 'Quis imperdiet massa tincidunt nunc. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
