import { IoRestaurantOutline } from "react-icons/io5";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { LiaHotelSolid, LiaHospital, LiaCarAltSolid } from "react-icons/lia";
import { FaBinoculars, FaRegLightbulb } from "react-icons/fa";
import { SiOsgeo } from "react-icons/si";
export const destinations = [
  { id: 1, icon: <IoRestaurantOutline />, name: "restaurant", number: 120 },
  {
    id: 2,
    icon: <HiOutlineBuildingStorefront />,
    name: "destination",
    number: 102,
  },
  { id: 3, icon: <LiaHotelSolid />, name: "hotels", number: 175 },
  { id: 4, icon: <LiaHospital />, name: "healthcare", number: 200 },
  { id: 5, icon: <LiaCarAltSolid />, name: "automotion", number: 190 },
];

export const about = [
  {
    id: 1,
    icon: <FaRegLightbulb />,
    name: "choose what to do",
    text: "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
  },
  {
    id: 2,
    icon: <FaBinoculars />,
    name: "find what you want",
    text: "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
  },
  {
    id: 3,
    icon: <SiOsgeo />,
    name: "explore amazing place",
    text: "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
  },
];
