const followingNode = `2`;
const followersNode = `0`;

window.addEventListener(
  `load`,
  () => {
    // eslint-disable-next-line no-undef
    localStorage.setItem(`username`, `${userComponent}`);
    localStorage.setItem(`accountType`, `Free`);
    localStorage.setItem(`following`, `${followingNode}`);
    localStorage.setItem(`followers`, `${followersNode}`);
  },
  false
);
