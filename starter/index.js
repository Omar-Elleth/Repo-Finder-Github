/* 
  [x] Create function => performSearch(searchTerm, isUserSelected)
  [x] Call performSearch inside Button eventListner
  PerformSearch
    [x] fetch data from url
    [ ] If Ok the show data in the page
    [ ] if not, show error message
*/

import {
  searchInput,
  buttonElement,
  cardsElement,
  usersInputElement,
} from "../scripts/elements.js";

import performSearch from "../scripts/performSearch.js";

// const USERS_API = "https://api.github.com/search/users?q=apple+org"

buttonElement?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, usersInputElement.checked);
});
