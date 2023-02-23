import { useState } from "react";

export function Search() {
  const items = [
    {
      id: 1,
      name: "Shirt",
      description: "Comfortable wear",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7546c71a1bf14d34bec7ac850000186d_9366/AEROREADY_Designed_to_Move_Feelready_Sport_Tee_Red_GT5552_01_laydown.jpg"
    },
    {
      id: 2,
      name: "Sneakers",
      description: "Leg wear",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ca56ffeb5554f9dad08af70010d84c3_9366/Ultraboost_22_Running_Shoes_Black_HQ8593_01_standard.jpg"
    },
    {
      id: 3,
      name: "Hat",
      description: "Different types of hats",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f48328aa8c44c26b231ae7b011719cb_9366/Relaxed_Strap-Back_Hat_Blue_GA5296_01_standard.jpg"
    },
    {
      id: 4,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c6cefadc1cee4f6aa97faf5d00c757fe_9366/Predator_Pro_Hybrid_Hansker_Svart_HN3341_21_model.jpg"
    },
    {
      id: 5,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e49791af13e4dd2a66baf5d00c761e1_9366/Predator_Pro_Hybrid_Hansker_Svart_HN3341_23_hover_model.jpg"
    },
    {
      id: 6,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa4a2efb21234ac4a54faf5d00c76fc5_9366/Predator_Pro_Hybrid_Hansker_Svart_HN3341_41_detail.jpg"
    },
    {
      id: 7,
      name: "Gloves",
      description: "Hand wearable",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb17b71aebe24e0c938ead80014535b9_9366/Aditech_22_Hanske_enkel_Hvit_HA5864_01_standard.jpg"
    },
    {
      id: 8,
      name: "Sneakers",
      description:
        "Born from neccessity and built with purpose, Forum changed the game in 1984 instantly becoming the most innovatative basketball shoe of its time. As quickly as it was adopted on court the acclaimed slhouette transcended the hardwood, becoming an early streetwear icon. Today we reintroduce an icon evolved - Forum is back to spark the expression of a new generation.",
      img:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff82213b88c74ac5a0cbac5e004bd8e3_9366/Forum_Low_Sko_Hvit_FY7756_02_standard_hover.jpg"
    }
  ];

  const [character, setCharacter] = useState("");

  function change() {
    setCharacter(document.getElementsByTagName("input")[0].value);
  }

  let listItems = items.filter((item) =>
    item.name.toLowerCase().includes(character)
  );

  let list = listItems.map((item) => (
    <li key={item.key} className="overflow-hidden mb-5 relative">
      <div className="border border-2 border-gray-200 overflow-hidden">
        <img
          className="hover:scale-125 animate-[wiggle_1s_ease-in-out_infinite] duration-300"
          src={item.img}
          alt=""
        />
      </div>
      <span className="absolute bottom-5 left-5 border border-black px-2 opacity-[0.6] hover:bg-black hover:text-white hover:opacity-100">
        {item.name}
      </span>
      <span className="absolute top-5 left-5 opacity-[0.6] hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-5 h-5 hover:fill-yellow-300 hover:opacity-100 hover:scale-125 ease-out duration-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </span>
    </li>
  ));

  return (
    <section className="p-5">
      <input
        type="text"
        className="border border-black px-3 py-2 mb-5 w-full md:w-1/2"
        placeholder="Search..."
        onChange={change}
      />
      <ul className="lg:columns-4 sm:columns-3 gap-4">{list}</ul>
    </section>
  );
}
