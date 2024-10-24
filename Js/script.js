// menu button
const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// user login
// sign in element
const inSignBtn = document.querySelector("#sign-in-btn");
const inSignForm = document.querySelector("#sign-in-form");
const closeInBtn = document.querySelector("#closer-in");
// sign in event
inSignBtn.addEventListener("click", function () {
  inSignForm.classList.remove("hidden");
});
closeInBtn.addEventListener("click", function () {
  inSignForm.classList.add("hidden");
});

// sign up btn
const upSignBtn = document.querySelector("#sign-up-btn");
const upSignForm = document.querySelector("#sign-up-form");
const closeUpBtn = document.querySelector("#closer-up");
// sign up event
upSignBtn.addEventListener("click", function () {
  upSignForm.classList.remove("hidden");
});
closeUpBtn.addEventListener("click", function () {
  upSignForm.classList.add("hidden");
});

// best carousel to show best products
const data = [
  {
    id: "١",
    title: "مارغريتا",
    content:
      "الاختيار الكلاسيكي! صوص الطماطم الطازج، جبنة موزاريلا، وريحان طازج.",
    price: "80 ج",
    img: "Images/pizza/margherita.png",
  },
  {
    id: "٢",
    title: "بيبروني",
    content:
      "عجينة هشة مغطاة بصلصة الطماطم والموزاريلا وشرائح البيبروني الغنية.",
    price: "90 ج",
    img: "Images/pizza/pepperoni.png",
  },
  {
    id: "٣",
    title: "كواترو فورماغي",
    content:
      "مزيج من 4 أنواع من الجبن: موزاريلا، غورغونزولا، بارميزان، وجبنة الماعز.",
    price: "100 ج",
    img: "Images/pizza/quattro_formaggi.png",
  },
  {
    id: "٤",
    title: "دجاج باربكيو",
    content: "دجاج مشوي وصوص باربكيو مع جبنة موزاريلا وبصل أحمر وكزبرة.",
    price: "95 ج",
    img: "Images/pizza/bbq_chicken.png",
  },
  {
    id: "٥",
    title: "خبز بالثوم",
    content: "خبز مقرمش مطهو مع زبدة غنية ونكهة الثوم اللذيذة.",
    price: "30 ج",
    img: "Images/sides/garlic_bread.png",
  },
  {
    id: "٦",
    title: "سلطة كابريزي",
    content:
      "سلطة إيطالية منعشة بجبنة موزاريلا طازجة، طماطم، ريحان، وصوص بلسمك.",
    price: "50 ج",
    img: "Images/sides/caprese_salad.png",
  },
  {
    id: "٧",
    title: "تيراميسو",
    content: "حلوى إيطالية مشهورة بطبقات من القهوة وجبنة ماسكاربوني.",
    price: "40 ج",
    img: "Images/desserts/tiramisu.png",
  },
];

const bestCar = document.getElementById("best-items");
const prevBtnCar = document.getElementById("prev-car");
const nextBtnCar = document.getElementById("next-car");
let currentBest = 0;

// Populate the carousel with data
data.forEach((item) => {
  const card = document.createElement("div");
  card.className =
    "card flex-shrink-0 p-4 bg-white rounded-lg shadow-md mx-2 text-center relative ";
  card.innerHTML = `
  <div class="relative flex justify-between ">
  <h1 class="font-ruqaa text-9xl absolute text-accentGold cursor-default">${item.id}</h1>
    <button 
      class="heart-btn duration-300 text-2xl absolute left-0"
      aria-label="Favorite">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
    </button>
  </div>
  <img src="${item.img}" alt="${item.title}" class="w-full h-40 object-contain size-11 mb-4 rounded-lg ">
    <div class="card-content mb-20 relative">
      <h2 class="font-bold text-main mb-4 text-3xl font-momken">${item.title}</h2>
    <p class="text-gray-600 mb-8 relative">${item.content}</p>
    </div>
    <div class="flex justify-between w-full absolute bottom-0 left-0 p-3">
      <p class="text-lg font-semibold text-red-500 font-ruqaa">${item.price}</p>
      <button class="cart mt-4 bg-accentGold text-white py-2 px-4 rounded-md ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
  `;
  bestCar.appendChild(card);
});

// Function to update the carousel position
function updateBest() {
  const cardWidth = bestCar.children[0].offsetWidth + 16; // Card width + margin
  bestCar.style.transform = `translateX(${currentBest * cardWidth}px)`;
}

// Event listeners for next/prev buttons
nextBtnCar.addEventListener("click", () => {
  if (currentBest < data.length - 1) currentBest++;
  updateBest();
});
prevBtnCar.addEventListener("click", () => {
  if (currentBest > 0) currentBest--;
  updateBest();
});

// menu
const menu = {
  pizza: [
    {
      id: "١",
      title: "بيتزا مارغريتا",
      content: "صوص طماطم، جبنة موزاريلا، وريحان طازج.",
      price: "80 ج",
      img: "Images/pizza/margherita.png",
    },
    {
      id: "٢",
      title: "بيتزا سجق بلدي",
      content: "صوص طماطم، جبنة موزاريلا، سجق مصري، وفلفل حار.",
      price: "90 ج",
      img: "Images/pizza/sogok.png",
    },
    {
      id: "٣",
      title: "بيتزا جبنة رومي",
      content: "جبنة موزاريلا وجبنة رومي مصرية.",
      price: "85 ج",
      img: "Images/pizza/romi_cheese.png",
    },
    {
      id: "٤",
      title: "بيتزا كفتة",
      content: "صوص طماطم، جبنة موزاريلا، قطع كفتة مشوية.",
      price: "95 ج",
      img: "Images/pizza/kofta.png",
    },
    {
      id: "٥",
      title: "بيتزا فراخ باربكيو",
      content: "دجاج مشوي، صوص باربكيو، وبصل أحمر.",
      price: "100 ج",
      img: "Images/pizza/bbq_chicken.png",
    },
    {
      id: "٦",
      title: "بيتزا شاورما لحم",
      content: "لحم شاورما، بصل مكرمل، وصوص طحينة.",
      price: "110 ج",
      img: "Images/pizza/beef_shawarma.png",
    },
    {
      id: "٧",
      title: "بيتزا بالخضار",
      content: "فلفل ألوان، زيتون، بصل، وصوص الطماطم.",
      price: "85 ج",
      img: "Images/pizza/vegetable.png",
    },
    {
      id: "٨",
      title: "بيتزا مشروم وجبنة",
      content: "مزيج من الجبن والمشروم الطازج.",
      price: "90 ج",
      img: "Images/pizza/mushroom_cheese.png",
    },
    {
      id: "٩",
      title: "بيتزا جبنة قديمة",
      content: "جبنة موزاريلا وجبنة قديمة مصرية.",
      price: "100 ج",
      img: "Images/pizza/aged_cheese.png",
    },
    {
      id: "١٠",
      title: "بيتزا ميكس جبن",
      content: "خليط من جبنة موزاريلا، رومي، وشيدر.",
      price: "95 ج",
      img: "Images/pizza/mixed_cheese.png",
    },
  ],
  chicken: [
    {
      id: "١١",
      title: "فراخ مشوية",
      content: "فراخ متبلة مشوية على الفحم.",
      price: "120 ج",
      img: "Images/chicken/grilled_chicken.png",
    },
    {
      id: "١٢",
      title: "ستربس فراخ",
      content: "قطع دجاج مقرمشة مع صوص.",
      price: "75 ج",
      img: "Images/chicken/chicken_strips.png",
    },
    {
      id: "١٣",
      title: "ساندويتش شاورما فراخ",
      content: "دجاج شاورما مع مخلل وطحينة.",
      price: "60 ج",
      img: "Images/chicken/chicken_shawarma.png",
    },
    {
      id: "١٤",
      title: "فراخ كنتاكي",
      content: "قطع دجاج مقلية بخلطة خاصة.",
      price: "80 ج",
      img: "Images/chicken/kfc_style.png",
    },
    {
      id: "١٥",
      title: "فاهيتا فراخ",
      content: "قطع دجاج مع خضار وصلصة فاهيتا.",
      price: "85 ج",
      img: "Images/chicken/fajita.png",
    },
    {
      id: "١٦",
      title: "أجنحة فراخ حارة",
      content: "أجنحة فراخ مغموسة في صوص حار.",
      price: "70 ج",
      img: "Images/chicken/spicy_wings.png",
    },
    {
      id: "١٧",
      title: "فراخ بصوص كريمة",
      content: "دجاج مطهو بصوص الكريمة.",
      price: "95 ج",
      img: "Images/chicken/cream_chicken.png",
    },
    {
      id: "١٨",
      title: "برجر فراخ",
      content: "برجر فراخ مشوي مع صوص.",
      price: "65 ج",
      img: "Images/chicken/chicken_burger.png",
    },
    {
      id: "١٩",
      title: "دجاج باربكيو",
      content: "دجاج متبل ومشوي بصوص باربكيو.",
      price: "90 ج",
      img: "Images/chicken/bbq_chicken.png",
    },
    {
      id: "٢٠",
      title: "أرز مع فراخ",
      content: "أرز بسمتي مع قطع فراخ مشوية.",
      price: "85 ج",
      img: "Images/chicken/rice_chicken.png",
    },
  ],
  sides: [
    {
      id: "31",
      title: "بطاطس مقلية",
      content: "بطاطس مقلية مملحة مع صوص الكاتشب.",
      price: "30 ج",
      img: "Images/sides/fries.png",
    },
    {
      id: "32",
      title: "خبز بالثوم",
      content: "خبز بزبدة الثوم وتوابل الأعشاب.",
      price: "35 ج",
      img: "Images/sides/garlic_bread.png",
    },
    {
      id: "33",
      title: "محشي ورق عنب",
      content: "ورق عنب محشي بالأرز والخضروات.",
      price: "40 ج",
      img: "Images/sides/stuffed_grape_leaves.png",
    },
    {
      id: "34",
      title: "سلطة طحينة",
      content: "طحينة متبلة بعصير الليمون وزيت الزيتون.",
      price: "25 ج",
      img: "Images/sides/tahini_salad.png",
    },
    {
      id: "35",
      title: "سلطة خضراء",
      content: "خيار، طماطم، بصل، زيت زيتون، وعصير ليمون.",
      price: "20 ج",
      img: "Images/sides/green_salad.png",
    },
  ],
  desserts: [
    {
      id: 51,
      title: "أم علي",
      content: "حلوى شرقية مصنوعة من رقائق العجين مع الحليب والمكسرات.",
      price: "50 ج",
      img: "Images/desserts/om_ali.png",
    },
    {
      id: 52,
      title: "تيراميسو",
      content: "حلوى إيطالية مصنوعة من القهوة وجبنة ماسكاربوني.",
      price: "60 ج",
      img: "Images/desserts/tiramisu.png",
    },
    {
      id: 53,
      title: "كنافة بالنوتيلا",
      content: "كنافة مقرمشة محشوة بشوكولاتة نوتيلا.",
      price: "55 ج",
      img: "Images/desserts/kunafa_nutella.png",
    },
    {
      id: 54,
      title: "بسبوسة",
      content: "حلوى سميد تقليدية مع شراب العسل.",
      price: "45 ج",
      img: "Images/desserts/basbousa.png",
    },
    {
      id: 55,
      title: "تشيز كيك",
      content: "كيك بارد مع طبقة جبن كريمي وصلصة فراولة.",
      price: "65 ج",
      img: "Images/desserts/cheesecake.png",
    },
  ],
  drinks: [
    {
      id: 71,
      title: "عصير مانجو",
      content: "عصير مانجو طبيعي، منعش وحلو.",
      price: "30 ج",
      img: "Images/juices/mango_juice.png",
    },
    {
      id: 72,
      title: "عصير أناناس",
      content: "عصير أناناس طازج، مثالي لنكهات الصيف.",
      price: "30 ج",
      img: "Images/juices/pineapple_juice.png",
    },
    {
      id: 73,
      title: "عصير فراولة",
      content: "عصير فراولة طازج وحلو، مشروب مثالي.",
      price: "35 ج",
      img: "Images/juices/strawberry_juice.png",
    },
    {
      id: 74,
      title: "عصير رمان",
      content: "عصير رمان طبيعي، غني بالمضادات الأكسدة.",
      price: "40 ج",
      img: "Images/juices/pomegranate_juice.png",
    },
    {
      id: 75,
      title: "عصير تفاح",
      content: "عصير تفاح طازج مع نكهة مميزة.",
      price: "25 ج",
      img: "Images/juices/apple_juice.png",
    },
  ],
  extras: [
    {
      id: 91,
      title: "جبنة إضافية",
      content: "إضافة جبنة موزاريلا طازجة لبيتزاك.",
      price: "15 ج",
      img: "Images/extras/extra_cheese.png",
    },
    {
      id: 92,
      title: "شرائح فلفل حار",
      content: "شرائح فلفل حار لإضافة نكهة حارة.",
      price: "10 ج",
      img: "Images/extras/spicy_peppers.png",
    },
    {
      id: 93,
      title: "مشروم طازج",
      content: "شرائح مشروم طازج للإضافات.",
      price: "12 ج",
      img: "Images/extras/fresh_mushrooms.png",
    },
    {
      id: 94,
      title: "زيت زيتون",
      content: "زيت زيتون بكر ممتاز لإضافته إلى الطبق.",
      price: "8 ج",
      img: "Images/extras/olive_oil.png",
    },
    {
      id: 95,
      title: "صوص باربكيو",
      content: "صوص باربكيو لذيذ لتغميس الطعام.",
      price: "5 ج",
      img: "Images/extras/barbecue_sauce.png",
    },
  ],
};
// elements
const pizzaCont = document.getElementById("pizza");
const chickenCont = document.getElementById("chicken");
const sidesCont = document.getElementById("sides");
const dessertCont = document.getElementById("dessert");
const drinksCont = document.getElementById("drinks");
const extrasCont = document.getElementById("extras");

// main function
const menuItem = function (category, container) {
  category.forEach((cat) => {
    const item = document.createElement("div");
    item.className =
      "menu-content font-ruqaa flex justify-between items-center mb-6 px-2";
    item.innerHTML = `<div class="cont px-2">
                <h4 class="text-lg text-main">${cat.title}</h4>
                <p class="text-sm">
                  ${cat.content}
                </p>
              </div>
              <div class="price">${cat.price}</div>`;
    container.appendChild(item);
  });
};
// pizza category
menuItem(menu.pizza, pizzaCont);
menuItem(menu.chicken, chickenCont);
menuItem(menu.sides, sidesCont);
menuItem(menu.drinks, drinksCont);
menuItem(menu.desserts, dessertCont);
menuItem(menu.extras, extrasCont);

//
//
// /////////////////////////////////////////////////////////
// review
const testimonials = [
  {
    id: 1,
    name: "أحمد علي",
    content: "أفضل بيتزا تناولتها في حياتي! النكهات رائعة والخدمة ممتازة.",
    rating: 5,
    img: "Images/testimonials/ahmed_ali.png",
  },
  {
    id: 2,
    name: "سارة محمد",
    content: "الأجواء هنا رائعة. أحببت بيتزا المارجريتا الخاصة بهم.",
    rating: 4,
    img: "Images/testimonials/sarah_mohamed.png",
  },
  {
    id: 3,
    name: "حسن سعيد",
    content: "طعام لذيذ وخدمة سريعة. أنصح الجميع بزيارة هذا المطعم.",
    rating: 5,
    img: "Images/testimonials/hasan_saeed.png",
  },
  {
    id: 4,
    name: "فاطمة يوسف",
    content: "بيتزا دجاج باربكيو كانت مذهلة. سأعود بالتأكيد!",
    rating: 4,
    img: "Images/testimonials/fatma_youssef.png",
  },
  {
    id: 5,
    name: "محمد نبيل",
    content: "أحببت تجربة تناول الطعام هنا. المنيو متنوع وأسعار معقولة.",
    rating: 5,
    img: "Images/testimonials/mohamed_nabil.png",
  },
];
// element
const review = document.getElementById("review-content");
const nextRev = document.getElementById("nexr-rev");
const prevRev = document.getElementById("prev-rev");
let currentIndex = 0;

testimonials.forEach((rev) => {
  const revCard = document.createElement("div");
  revCard.className = "rev-card flex rounded-lg shadow-md w-1/2";
  revCard.innerHTML = `hi${rev.price}`;
  review.appendChild(revCard);
});
