// Variables declaration

const appComponent = document.querySelector(`section#app`);
const appSideBar = document.querySelector(`nav#sidebar`);
const sidebarHome = document.querySelector(`a#home-link`);
const newLocalNode = `li#home-component`;
const sidebarHomeComponent = document.querySelector(newLocalNode);
const upgradeBtn = document.querySelector(`button#get-premium`);
const mainInterface = appComponent.querySelector(`.main-app`);

const mainHeader = appComponent.querySelector(`#top-bar`);
const sidebarLinks = appSideBar.querySelectorAll(`li.link-s`);
// const sidebarLinksAnchor = appSideBar.querySelectorAll("li.link-s > a");
const connectivityContainer = document.querySelector(`.connectivity-status`);
const connectivityStatus = document.querySelector(`a#icon-internet`);
const connectivityToolTip = document.querySelector(`.tool-tip`);
const closeConnectivityStatus = document.querySelector(`a#close-tooltip`);
const displayUsername = appComponent.querySelector(`span#username`);
const profileBtn = appComponent.querySelector(`button.user-toggle`);
const userListPanel = appComponent.querySelector(`ul#user-account `);
const offlineWrapper = appComponent.querySelector(`div.offline-wrapper`);

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

// Check connectivity function

function hasNetwork(online) {
  if (online) {
    connectivityContainer.classList.add(`user-online`);
    upgradeBtn.classList.add(`inner-space`);
    offlineWrapper.classList.add(`user-connected`);
  } else {
    connectivityContainer.classList.remove(`user-online`);
    upgradeBtn.classList.remove(`inner-space`);
    offlineWrapper.classList.remove(`user-connected`);
  }
}

// Attach click event for all lists in the sidebar

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
    // Get username which is to be stringified
    // Get username from browser settings
    const eventUser = localStorage.getItem(`username`);
    JSON.stringify(`accountUserName`);
    e.preventDefault();
    // Disable panel for the mean while
    userListPanel.classList.remove(`panel-visible`);
    profileBtn.classList.remove(`active`);
    // Set SVG to the arrow down icon
    profileBtn.innerHTML = `
      <img src="./app-components/app-img/user-data/account-img.jpg" alt="">
      <span id="username">${eventUser}</span>
      <a href="./index.html" id="show-options">
      <svg role="img" height="16" width="16" class="Svg-ulyrgf-0 cMigZB f6406a56d35aea2a3598f6f270ef156c-scss" viewBox="0 0 16 16"><path d="M3 6l5 5.794L13 6z"></path></svg>
      </a>
      `;
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

// When the profile button is clicked show the panel

profileBtn.addEventListener(
  `click`,
  (e) => {
    // Disable tooltip for the meanwhile
    connectivityToolTip.classList.remove(`visible`);
    // Get username from browser settings
    const eventUser = localStorage.getItem(`username`);
    JSON.stringify(`accountUserName`);
    e.preventDefault();
    if (userListPanel.classList.contains(`panel-visible`)) {
      userListPanel.classList.remove(`panel-visible`);
      profileBtn.innerHTML = `
      <img src="./app-components/app-img/user-data/account-img.jpg" alt="">
      <span id="username">${eventUser}</span>
      <a href="./index.html" id="show-options">
      <svg role="img" height="16" width="16" class="Svg-ulyrgf-0 cMigZB f6406a56d35aea2a3598f6f270ef156c-scss" viewBox="0 0 16 16"><path d="M3 6l5 5.794L13 6z"></path></svg>
      </a>
      `;
      profileBtn.classList.remove(`active`);
    } else {
      userListPanel.classList.add(`panel-visible`);
      profileBtn.innerHTML = `
      <img src="./app-components/app-img/user-data/account-img.jpg" alt="">
      <span id="username">${eventUser}</span>
      <a href="./index.html" id="show-options">
      <svg role="img" height="16" width="16" class="Svg-ulyrgf-0 cMigZB f6406a56d35aea2a3598f6f270ef156c-scss" viewBox="0 0 16 16"><path d="M13 10L8 4.206 3 10z"></path></svg>
      </a>
      `;
      profileBtn.classList.add(`active`);
    }
  },
  false
);

// When the user scrolls, make the top bar opaque

mainInterface.addEventListener(
  `scroll`,
  () => {
    if (mainInterface.scrollTop > 10 || mainInterface.scrollTop > 10) {
      mainHeader.classList.add(`opaqueBar`);
    } else {
      mainHeader.classList.remove(`opaqueBar`);
    }
  },
  false
);
