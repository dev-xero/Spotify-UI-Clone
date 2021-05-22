// Variables declaration

const appComponent = document.querySelector(`section#app`);
const appSideBar = document.querySelector(`nav#sidebar`);
const sidebarHome = document.querySelector(`a#home-link`);
const newLocalNode = `li#home-component`;
const sidebarHomeComponent = document.querySelector(newLocalNode);
const upgradeBtn = document.querySelector(`button#get-premium`);

const sidebarLinks = appSideBar.querySelectorAll(`li.link-s`);
// const sidebarLinksAnchor = appSideBar.querySelectorAll("li.link-s > a");
const connectivityContainer = document.querySelector(`.connectivity-status`);
const connectivityStatus = document.querySelector(`a#icon-internet`);
const connectivityToolTip = document.querySelector(`.tool-tip`);
const closeConnectivityStatus = document.querySelector(`a#close-tooltip`);
const displayUsername = appComponent.querySelector(`span#username`);

// Check user account type from browser storage

function checkAccount() {
  // Check if the user is a Pro or Free member
  const accountType = localStorage.getItem(`accountType`);
  JSON.stringify(`accountType`);
  if (accountType.match(`Free`)) {
    upgradeBtn.classList.remove(`pro-user`);
  } else {
    upgradeBtn.classList.add(`pro-user`);
  }
  // Set display username from browser settings
  const accountUserName = localStorage.getItem(`username`);
  JSON.stringify(`accountUserName`);
  displayUsername.innerHTML = accountUserName;
}

// Attach click event for all lists in the ul

sidebarLinks.forEach((component) => {
  component.addEventListener(
    `click`,
    (e) => {
      e.preventDefault();
      sidebarLinks.forEach((hookNode) => {
        hookNode.classList.remove(`active`);
      });
      component.classList.add(`active`);
      if (sidebarHomeComponent.classList.contains(`active`)) {
        sidebarHome.innerHTML = `
			<svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z" fill="currentColor"></path></svg>
			<span>Home</span>
			`;
      } else {
        sidebarHome.innerHTML = `
			<svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="st-hover"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="#FFFFFF"></path></svg>
			<span>Home</span>
			`;
      }
    },
    false
  );
});

// Check connectivity function

function hasNetwork(online) {
  if (online) {
    connectivityContainer.classList.add(`user-online`);
    upgradeBtn.classList.add(`inner-space`);
  } else {
    connectivityContainer.classList.remove(`user-online`);
    upgradeBtn.classList.remove(`inner-space`);
  }
}

// When window loads, check for connectivity

window.onload = () => {
  hasNetwork(navigator.onLine);
  window.addEventListener(`online`, () => {
    hasNetwork(true);
  });

  window.addEventListener(`offline`, () => {
    hasNetwork(false);
  });

  // Check account type

  checkAccount();
};

// When connectivity icon is clicked, display tooltip

connectivityStatus.addEventListener(
  `click`,
  (e) => {
    e.preventDefault();
    if (connectivityToolTip.classList.contains(`visible`)) {
      connectivityToolTip.classList.remove(`visible`);
    } else {
      connectivityToolTip.classList.add(`visible`);
    }
  },
  false
);

// Close tooltip when close icon is clicked

closeConnectivityStatus.addEventListener(
  `click`,
  (e) => {
    e.preventDefault();
    connectivityToolTip.classList.remove(`visible`);
  },
  false
);
