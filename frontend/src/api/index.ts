import { IProduct } from "../typings";
import axios from "axios";

export const api = (() => {
  const routingTable: { [name: string]: IProduct[] } = {
    fruits: [
      {
        uuid: "",
        name: "신고산 배",
        price: 10000,
      },
      {
        uuid: "",
        name: "나주 배",
        price: 14000,
      },
    ],
    vegetables: [
      {
        uuid: "",
        name: "강원도 고랭지 배추",
        price: 10000,
      },
      {
        uuid: "",
        name: "강원도 홍감자",
        price: 14000,
      },
    ],
  };
  const getProducts = ({ category }: { category: string }): IProduct[] => {
    return routingTable[category];
  };
  const getAxiosProducts = ({ category }: { category: string }) => {};
  return {
    getProducts,
    getAxiosProducts,
  };
})();
