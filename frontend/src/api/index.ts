import { IProduct } from '../typings'

export const api = (() => {
  const routingTable: { [name: string] : IProduct[] } = {
    fruits: [
      {
        "name": "신고산 배",
        "price": 10000
      },
      {
        "name": "나주 배",
        "price": 14000
      }
    ],
    vegetables: [
      {
        "name": "강원도 고랭지 배추",
        "price": 10000
      },
      {
        "name": "강원도 홍감자",
        "price": 14000
      }
    ]
  }
  const getProducts = ({ category } : { category: string }): IProduct[] => { return routingTable[category]
  }
  return {
    getProducts 
  }
})()
