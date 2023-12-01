import { IoRestaurantOutline } from "react-icons/io5";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { LiaHotelSolid, LiaHospital, LiaCarAltSolid } from "react-icons/lia";
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
