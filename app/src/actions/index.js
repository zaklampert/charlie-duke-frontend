import {mapDataToPage} from '../data';

export const POPULATE_MENU = 'POPULATE_MENU';
export const POPULATE_PAGES = 'POPULATE_PAGES';

const API_URL = 'https://charlieduke.staging.wpengine.com';

const receivePages = (json) => ({
  type: POPULATE_PAGES,
  json
})

const mapWPData = (pages, menu) => dispatch => {
  const mappedMenuData = menu && menu.map(item=>{
    const pageMatch = pages && pages.find(page=>{
      return item.object_id === page.id;
    });
    pageMatch && Object.assign(item, {
      page_data: pageMatch
    });

    item && item.children && item.children.map(child => {
      const childPageMatch = pages && pages.find(page=>{
        return child.object_id === page.id;
      })
      childPageMatch && Object.assign(child, {
        page_data: childPageMatch
      });
    });
    return item
  })
  console.log(mappedMenuData);
  return dispatch(receivePages(mapDataToPage(mappedMenuData)));
}
const getPages = (menu) => dispatch => {
  return fetch(`${API_URL}/wp-json/wp/v2/pages?per_page=100&_embed`)
    .then(response => response.json())
    .then(pages=>{
      dispatch(mapWPData(pages, menu))
    });
}

export const getWPData = () => dispatch => {
  return fetch(`${API_URL}/wp-json/wp-api-menus/v2/menu-locations/site-menu`)
    .then(response => response.json())
    .then(json => {
      dispatch(getPages(json));
    })
}
