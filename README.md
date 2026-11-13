# QazTrip — Endterm Project

**Group member:** Temirzakhov Adilzhan<br>
**Topic:** Travel website about Kazakhstan

## Pages
Home, Cities, Routes, Tips, Tour (navigation bar on every page).

## Midterm features
Semantic HTML5, Bootstrap grid and components, Flexbox, CSS Grid, sticky header, responsive layout, table, form, lists, images with alt text.

## New endterm features
- **Arrays:** `cities`, `routes` (`js/data.js`), `favorites` (`js/cities.js`)
- **Loops:** `for` and `forEach` (filtering cities, building city cards, route rows, favorites list, tour options)
- **Functions:** `filterCities` (returns a value), `toggleFavorite`, `showCities`, `showFavorites`, `showRoutes`, `isValidEmail`, `setError`, `validateForm`
- **DOM manipulation:** city cards, route rows, favorites list and tour options are created from arrays; favorite items are added and removed dynamically; city cards are removed and added again when the search or filter changes; classes and text change on user actions
- **Interface features:** city search, region filter, favorites list, season filter for routes, tips accordion
- **Events:** `DOMContentLoaded`, `click`, `input`, `change`, `submit`, `mouseenter`, `mouseleave` with `addEventListener`; event object and `preventDefault()` on form submit
- **Form validation (Tour page):** name (min 3 characters), email format, tour selection, number of people (1-20), start date (required, not in the past); error messages appear under each field and a success message appears when the data is valid
- **jQuery:** ID, class and descendant selectors; `siblings()`, `children()`, `next()`, `closest()`; `fadeIn/fadeOut`, `slideToggle/slideDown/slideUp`


## Link
Published at: https://grand-starlight-018b9c.netlify.app
