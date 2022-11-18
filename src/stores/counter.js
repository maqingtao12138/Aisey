import { defineStore } from 'pinia'
import Tentacle from '../assets/Tentacle Lady.png'
export const useData1Store = defineStore('data1', {
  state: () => {
    return {
      name: 'Tentacle Lady',
      shengao: '175',
      tizhong: '45',
      age: '20',
      photo: Tentacle,
    }
  },
  getters: {
    getCompany() {
      return (key) => {
        switch (key) {
          case 'shengao':
            //语句
            return 'cm'

          case 'tizhong':
            //语句
            return 'kg'

          case 'age':
            //语句
            return '岁'

          default: //可选
            return ''
        }
      }
    }
  },
  actions: {

  }
})
