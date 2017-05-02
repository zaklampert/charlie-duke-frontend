import {mapDataToPage} from '../data';

export const POPULATE_MENU = 'POPULATE_MENU';
export const POPULATE_PAGES = 'POPULATE_PAGES';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

const API_URL = 'https://charlieduke.com';


const receivePages = (json) => ({
  type: POPULATE_PAGES,
  json
});

const receiveLocation = ({section, slide})=>({
  type: UPDATE_LOCATION,
  section,
  slide,
})

export const updateLocation = ({hash}) => dispatch => {
  const section = (hash.lastIndexOf("/") > -1) ? hash.substring(hash.lastIndexOf("#")+1,hash.lastIndexOf("/")) : hash.split('#')[1];
  const slide = hash.split('/')[1] || null;
  return dispatch(receiveLocation({section, slide}))
}

export const showModal = ({content}) => dispatch => {
  // $.fn.fullpage.setAllowScrolling(false);
  //
  // const viewer = ImageViewer(); //options is optional parameter
  // viewer.show(content); //second paramter is optional

  // return dispatch({
  //   type: SHOW_MODAL,
  //   content
  // })
}

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
