import { defineStore } from "pinia";

export const useBasketStore = defineStore('basket', {
    state: () => ({
        headphoneListInBasket: [],
        countHeadphone: 0,
        totalPrice: 0,
        headphoneCount: {}
    }),

    actions: {
        addInList(headphone) {
            // Загружаем данные из cookie перед добавлением
            this.loadFromCookie();

            // Добавляем новый элемент
            const existingHeadphone = this.headphoneListInBasket.find(item => item.title === headphone.title && item.img === headphone.img && item.count);

            if (existingHeadphone) {
                // Если наушник уже есть, увеличиваем количество
                existingHeadphone.count += 1;
            }else{
                this.headphoneListInBasket.push(headphone);
            }
           

            
            this.saveToCookie();
        },

      

        getCount() {
            return this.headphoneListInBasket.length;
        },
        getList() {
            // Загружаем данные из cookie перед возвратом списка
            this.loadFromCookie();
            return this.headphoneListInBasket;
        },
        saveToCookie() {
            const basketData = JSON.stringify(this.headphoneListInBasket);
            document.cookie = `headphoneList=${basketData}; max-age=${3600 * 24 * 30}`; // 30 дней
        },

        loadFromCookie() {
            const cookieString = document.cookie;
            const cookieParts = cookieString.split('; ');
            let basketData = null;

            // Ищем куку с данными наушников
            cookieParts.forEach(part => {
                if (part.startsWith('headphoneList=')) {
                    basketData = part.substring('headphoneList='.length);
                }
            });

            // Если кука найдена, парсим и обновляем состояние
            if (basketData) {
                this.headphoneListInBasket = JSON.parse(basketData);
            }
        }
    }
});