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
    
            this.loadFromCookie();         
            const existingHeadphone = this.headphoneListInBasket.find(item => item.title === headphone.title && item.img === headphone.img && item.count);
            if (existingHeadphone) {
                            existingHeadphone.count += 1;
            }else{
                this.headphoneListInBasket.push(headphone);
            }
          
           
            this.saveToCookie();
        },

        deleteElement(headphone){
            this.loadFromCookie();
            

            const existingHeadphone = this.headphoneListInBasket.find(item => item.title === headphone.title && item.img === headphone.img && item.count);

            if (existingHeadphone) {
                if (existingHeadphone.count > 1) {
                    existingHeadphone.count -= 1;
                } else {
                    // Не делаем ничего, если count = 1
                }
            }
           
            this.saveToCookie();


        },
        deleteFullElement(headphone) {
            this.loadFromCookie(); 
        
      
            const index = this.headphoneListInBasket.findIndex(item => 
                item.title === headphone.title && 
                item.img === headphone.img && 
                item.count > 0 
            );
        
           
            if (index !== -1) {
                this.headphoneListInBasket.splice(index, 1); 
            }
            this.saveToCookie()
        },
        getTotalPrice() {
          
            this.loadFromCookie();
            
        
            this.totalPrice = 0;
        
            
            for (let i = 0; i < this.headphoneListInBasket.length; i++) {
                const count = this.headphoneListInBasket[i].count; 
                const price = this.headphoneListInBasket[i].price;
                const total_price_for_element = count * price; 
        
                this.totalPrice += total_price_for_element; 
            }
            
            return this.totalPrice; 
        },
        getCountFromList() {
            this.loadFromCookie()
            let count = 0;
            for (let i = 0; i < this.headphoneListInBasket.length; i++) {
                count += this.headphoneListInBasket[i].count;
            }
            return count;
        },
        getList() {
            
            this.loadFromCookie();
            return this.headphoneListInBasket;
        },
        saveToCookie() {
            const basketData = JSON.stringify(this.headphoneListInBasket);
            document.cookie = `headphoneList=${basketData}; max-age=${3600 * 24 * 100}`; 
        },
        loadFromCookie() {
            const cookieString = document.cookie;
            const cookieParts = cookieString.split('; ');
            let basketData = null;

           
            cookieParts.forEach(part => {
                if (part.startsWith('headphoneList=')) {
                    basketData = part.substring('headphoneList='.length);
                }
            });

            
            if (basketData) {
                this.headphoneListInBasket = JSON.parse(basketData);
            }
        }
    }
});