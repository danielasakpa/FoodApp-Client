import FiestaRice from "./Assets/images/Food/Fiesta-Rice.jpg"
import FriedRice from "./Assets/images/Food/Fried-Rice.jpg"
import Intercon from "./Assets/images/Food/Intercon.jpg"
import MToorder from "./Assets/images/Food/MToorder.jpg"
import Plantain from "./Assets/images/Food/Plantain.jpg"
import Specialfriedrice from "./Assets/images/Food/Specialfriedrice.jpg"
import Stirfr from "./Assets/images/Food/Stirfr.jpg"
import VillageRice from "./Assets/images/Food/Village-Rice.jpg"


const productsArray = [
    {
        img: FiestaRice,
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Fiesta Rice",
        price: 2.99
    },
    {
        img: FriedRice,
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Fried Rice",
        price: 3.99
    },
    {
        img: Intercon,
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Jellof Rice",
        price: 2.99
    },
    {
        img: MToorder,
        id: "price_1LnUUoDM1jwCEz8OvxjnjjIcJ7to",
        title: "Amala with Gbegiri and Ewedu",
        price: 2.99
    },
    {
        img: Plantain,
        id: "price_1LnUUoDM1jjkokiwCEz8OvxIcJ7to",
        title: "Plantain",
        price: 1.99
    },
    {
        img: Specialfriedrice,
        id: "price_1LnUUoDM1jwCEz8ook9OvxIcJ7to",
        title: "Special Fried Rice",
        price: 2.99
    },
    {
        img: Stirfr,
        id: "price_1LnbhbhbUUoDM1jwCEz8OvxIcJ7to",
        title: "Stir Fried Spaghetti",
        price: 4.99
    },
    {
        img: VillageRice,
        id: "price_1LnUUoDMiojijn1jwCEz8OvxIcJ7to",
        title: "Village Rice",
        price: 3.99
    }
  ];
  
  function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
  
    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
  
    return productData;
  }


export { productsArray, getProductData};
