/****************Our services*************** */

const serviceTabs = document.querySelector(".tabs_title_design");
const tabsContent = document.querySelectorAll(".tabs_content li");
const tabsTitle = document.querySelectorAll(".tabs_title_design li");

serviceTabs.addEventListener("click", (event) => {
  tabsTitle.forEach((title, index) => {
    title.dataset.itemContent = index + 1;

    tabsContent.forEach((content, index) => {
      content.dataset.contentId = index + 1;

      if (event.target.dataset.itemContent === content.dataset.contentId) {
        event.target.classList.add("active_title");
        content.classList.add("active_content");
      } else {
        content.classList.remove("active_content");
        title.classList.remove("active_title");
      }
    });
  });
});

/***********Reviews Slider***************** */

$(".main_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".thumb_slider",
});
$(".thumb_slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".main_slider",
  // centerMode: true,
  focusOnSelect: true,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

/************Gallery of best images*****************/

const elem = document.querySelector(".grid");
const msnry = () => {
  new Masonry(elem, {
    itemSelector: ".grid_item",
    columnWidth: ".grid_item",
    percentPosition: true,
    gutter: 20,
  });
};
msnry();
// big images in gallery
Fancybox.bind("[data-fancybox]", {});

const loadMoreBtn = document.querySelector(".gallery_btn");
const gridItems = document.querySelectorAll(".grid_item");

let currentItems = 8;

loadMoreBtn.addEventListener("click", (event) => {
  const elementList = [...gridItems];
  const iconLoader = loadMoreBtn.querySelector(".gallery_btn i");
  const loaderSpin = loadMoreBtn.querySelector(".btn_loader");
  iconLoader.classList.remove("fa-plus");
  loaderSpin.classList.add("btn_loader_show");
  for (let i = currentItems; i < currentItems + 3; i++) {
    setTimeout(() => {
      iconLoader.classList.add("fa-plus");
      loaderSpin.classList.remove("btn_loader_show");
      if (elementList[i]) {
        elementList[i].style.display = "block";
        msnry();
      }
    }, 2000);
  }
  currentItems += 3;

  if (currentItems >= elementList.length) {
    setTimeout(() => {
      event.target.classList.add("loaded");
    }, 2000);
  }
});

/****************Our amazing work******************** */
const worksBlock = document.querySelector(".works_categories");
const tabsTitles = worksBlock.querySelectorAll(".tabs_title_design li");
const wrapperImages = document.querySelector(".content_works");
const moreItemsWorks = document.querySelector(".load_more_btn");

const arrayGraphicDesign = [
  "assets/img/graphic_design/graphic-design1.jpg",
  "assets/img/graphic_design/graphic-design2.jpg",
  "assets/img/graphic_design/graphic-design3.jpg",
  "assets/img/graphic_design/graphic-design4.jpg",
  "assets/img/graphic_design/graphic-design5.jpg",
  "assets/img/graphic_design/graphic-design6.jpg",
  "assets/img/graphic_design/graphic-design7.jpg",
  "assets/img/graphic_design/graphic-design8.jpg",
  "assets/img/graphic_design/graphic-design9.jpg",
  "assets/img/graphic_design/graphic-design10.jpg",
  "assets/img/graphic_design/graphic-design11.jpg",
  "assets/img/graphic_design/graphic-design12.jpg",
];
const arrayWebDesign = [
  "assets/img/web_design/web-design1.jpg",
  "assets/img/web_design/web-design2.jpg",
  "assets/img/web_design/web-design3.jpg",
  "assets/img/web_design/web-design4.jpg",
  "assets/img/web_design/web-design5.jpg",
  "assets/img/web_design/web-design6.jpg",
  "assets/img/web_design/web-design7.jpg",
];
const arrayLandingPages = [
  "assets/img/landing_page/landing-page1.jpg",
  "assets/img/landing_page/landing-page2.jpg",
  "assets/img/landing_page/landing-page3.jpg",
  "assets/img/landing_page/landing-page4.jpg",
  "assets/img/landing_page/landing-page5.jpg",
  "assets/img/landing_page/landing-page6.jpg",
  "assets/img/landing_page/landing-page7.jpg",
];
const arrayWordpress = [
  "assets/img/Wordpress/Wordpress1.jpg",
  "assets/img/Wordpress/Wordpress2.jpg",
  "assets/img/Wordpress/Wordpress3.jpg",
  "assets/img/Wordpress/Wordpress4.jpg",
  "assets/img/Wordpress/Wordpress5.jpg",
  "assets/img/Wordpress/Wordpress6.jpg",
  "assets/img/Wordpress/Wordpress7.jpg",
  "assets/img/Wordpress/Wordpress8.jpg",
  "assets/img/Wordpress/Wordpress9.jpg",
  "assets/img/Wordpress/Wordpress10.jpg",
];

const allArrays = [arrayGraphicDesign,arrayWordpress, arrayWebDesign, arrayLandingPages];
let allCategories = [];
let fromAmountItems = 0;
let toAmountItems = 3;
allArrays.forEach((item) => { allCategories.push(...item.slice(fromAmountItems, toAmountItems)); });

wrapperImages.dataset.category = "All";

const createArrayImages = (category, dataImg) => {
  category.forEach((item) => {
    wrapperImages.dataset.category = dataImg;
    if(dataImg !== "All") {
      moreItemsWorks.classList.add("loaded");
    } else {
      moreItemsWorks.classList.remove("loaded");
    }
      const wrapperImg = document.createElement("div");
      const wrapperLinks = document.createElement('div');
      const shareLinkOne = document.createElement('a');
      const shareLinkTwo = document.createElement('a');
      const titleImg = document.createElement("h4");
      const categoryImg = document.createElement("span");
      const img = document.createElement("img");

      wrapperImg.classList.add('item_card');
      wrapperLinks.classList.add('wrapper_links');
      titleImg.textContent = "creative design";
      categoryImg.textContent = dataImg;
      img.setAttribute("src", item);
      if( wrapperImages.dataset.category === 'All') {
        if(item.includes('graphic_design')) {
          categoryImg.textContent = 'Graphic Design';
        } else if(item.includes('web_design')) {
          categoryImg.textContent = 'Web Design';
        } else if(item.includes('landing_page')) {
          categoryImg.textContent = 'Landing Pages';
        } else if(item.includes('Wordpress')) {
          categoryImg.textContent = 'Wordpress';
        }
        } 
      
        shareLinkOne.setAttribute("href", '#');
        shareLinkTwo.setAttribute("href", '#');

      wrapperLinks.appendChild(shareLinkOne);
      wrapperLinks.appendChild(shareLinkTwo);
      wrapperImg.appendChild(wrapperLinks);
      wrapperImg.appendChild(img);
      wrapperImg.appendChild(titleImg);
      wrapperImg.appendChild(categoryImg);
      wrapperImages.appendChild(wrapperImg);
  });
};

const showCategory = (e) => {
  const currentCategory = e.target.dataset.category;
  const clearTabContent = document.querySelectorAll(".content_works div");

  tabsTitles.forEach((item) => {
    if (item === e.target) {
      clearTabContent.forEach((item) => item.remove());
      item.classList.add("current_tab");
      switch (currentCategory) {
        case "GraphicDesign":
          createArrayImages(arrayGraphicDesign, currentCategory);
          break;
        case "WebDesign":
          createArrayImages(arrayWebDesign, currentCategory);
          break;
        case "LandingPages":
          createArrayImages(arrayLandingPages, currentCategory);
          break;
        case "Wordpress":
          createArrayImages(arrayWordpress, currentCategory);
          break;
        case "All":
          createArrayImages(allCategories, currentCategory);
          break;
      }
    } else {
      item.classList.remove("current_tab");
    }
  });
  
};

  tabsTitles.forEach((item) => {
    if (item.dataset.category === "All") {
      item.classList.add("current_tab");
    }
  });

createArrayImages(allCategories, "All");

worksBlock.addEventListener("click", showCategory);

let countClick = 0;
const showMoreCategories = () => {
  const worksBtn = document.querySelector(".load_more_btn");
  const iconLoader = worksBtn.querySelector(".load_more_btn i");
  const loaderSpin = worksBtn.querySelector(".btn_loader");
  const countsOfImages = document.querySelectorAll('.item_card');
  let moreImages = [];
  fromAmountItems = 3;
  toAmountItems = 6;
  countClick++;

  if(countClick > 1 ) {
    fromAmountItems = 6;
    toAmountItems = 12;
  }
 
  iconLoader.classList.remove("fa-plus");
  loaderSpin.classList.add("btn_loader_show");
  allArrays.forEach((item) => { moreImages.push(...item.slice(fromAmountItems, toAmountItems)); });
 
  setTimeout(()=> {
    iconLoader.classList.add("fa-plus");
    loaderSpin.classList.remove("btn_loader_show");
    createArrayImages(moreImages, "All");
  },2000)

  if(countsOfImages.length >= 24) {
    setTimeout(()=> { worksBtn.classList.add('loaded')},2000);
  }
}
moreItemsWorks.addEventListener("click", showMoreCategories)

