
const lookupTemplate = (page) => {
  switch(page.order) {
    case 1:
      return "Hero";
    case 2:
      return "About";
    default:
      return "Story"
  }
}

const lookupChildTemplate = (child) => {
  switch(child.page_data.meta_box.page_format) {
    case "img_caption":
      return "ImageWithText";
    case "two_col":
      return "SideBySide";
    case "full_image":
      return "FullImage";
    case "quote":
      return "Quote";
    default:
      return "Default";
  }
}
export const mapDataToPage = (dataFromWordpress) => {
  return dataFromWordpress && dataFromWordpress.map((page, i)=>{
    // console.log(page);
    return {
      template: lookupTemplate(page),
      title: page.title,
      order: i,
      background: page &&
                  page.page_data &&
                  page.page_data._embedded &&
                  page.page_data._embedded["wp:featuredmedia"] &&
                  page.page_data._embedded["wp:featuredmedia"][0] &&
                  page.page_data._embedded["wp:featuredmedia"][0].source_url,
      slug: page &&
            page.page_data &&
            page.page_data.slug,
      content: page && page.page_data &&  page.page_data.content && page.page_data.content.rendered,
      children: page && page.children && page.children.map(child => {
        return {
          title: child && child.title,
          slug: child && child.page_data && child.page_data.slug,
          template: child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.page_format && lookupChildTemplate(child),
          leftPhoto: child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.left_col_img && child.page_data.meta_box.left_col_img[0] && child.page_data.meta_box.left_col_img[0].url,
          rightPhoto: child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.right_col_img && child.page_data.meta_box.right_col_img[0] && child.page_data.meta_box.right_col_img[0].url,
          leftCaption:  child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.left_col_text,
          rightCaption:  child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.right_col_text,
          imageLink:child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.img_link,
          leftImageLink:child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.left_col_img_link,
          rightImageLink:child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.right_col_img_link,
          video: child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.video_url,
          leftVideo: child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.left_video,
          rightVideo: child && child.page_data && child.page_data.meta_box && child.page_data.meta_box.right_video,
          image: child &&
                  child.page_data &&
                  child.page_data._embedded &&
                  child.page_data._embedded["wp:featuredmedia"] &&
                  child.page_data._embedded["wp:featuredmedia"][0] &&
                  child.page_data._embedded["wp:featuredmedia"][0].source_url,
          imageWidth: child &&
                  child.page_data &&
                  child.page_data._embedded &&
                  child.page_data._embedded["wp:featuredmedia"] &&
                  child.page_data._embedded["wp:featuredmedia"][0] &&
                  child.page_data._embedded["wp:featuredmedia"][0].media_details &&
                  child.page_data._embedded["wp:featuredmedia"][0].media_details.width,
          imageHeight: child &&
                  child.page_data &&
                  child.page_data._embedded &&
                  child.page_data._embedded["wp:featuredmedia"] &&
                  child.page_data._embedded["wp:featuredmedia"][0] &&
                  child.page_data._embedded["wp:featuredmedia"][0].media_details &&
                  child.page_data._embedded["wp:featuredmedia"][0].media_details.height,
          content: child && child.page_data &&  child.page_data.content && child.page_data.content.rendered
        }
      })
    }
  })
}
