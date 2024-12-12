<script setup>
import { ref,defineEmits } from 'vue';

const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');
const email = ref('');

const cardNumberError = ref('');
const expiryDateError = ref('');
const cvvError = ref('');
const emailError = ref('');

function validateCardNumber() {
    const regex = /^\d{4} \d{4} \d{4} \d{4}$/; 
    cardNumberError.value = regex.test(cardNumber.value) ? '' : 'Неверный номер карты';
}

function validateExpiryDate() {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; 
    expiryDateError.value = regex.test(expiryDate.value) ? '' : 'Неверная дата';
}

function validateCVV() {
    const regex = /^\d{3}$/;
    cvvError.value = regex.test(cvv.value) ? '' : 'Неверный CVV код';
}

function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    emailError.value = regex.test(email.value) ? '' : 'Неверный email';
}

function submitForm() {
    validateCardNumber();
    validateExpiryDate();
    validateCVV();
    validateEmail();

    if (!cardNumberError.value && !expiryDateError.value && !cvvError.value && !emailError.value) {
        alert('Форма успешно отправлена!');
        
    }
}


const emit = defineEmits(['closeWindow'])


function closeWindow(){
    emit('closeWindow')
}
</script>


<template>
    <div class="container_window" @click="closeWindow">
        <div class="window"  @click.stop>
            <h2>Оплата</h2>

            <div class="form-group">
                <label for="cardNumber">Номер карты</label>
                <input
                    type="text"
                    id="cardNumber"
                    v-model="cardNumber"
                    @blur="validateCardNumber"
                    placeholder="XXXX XXXX XXXX XXXX"
                />
                <span v-if="cardNumberError" class="error">{{ cardNumberError }}</span>
            </div>

            <div class="form-group">
                <label for="expiryDate">Месяц/Год</label>
                <input
                    type="text"
                    id="expiryDate"
                    v-model="expiryDate"
                    @blur="validateExpiryDate"
                    placeholder="MM/YY"
                />
                <span v-if="expiryDateError" class="error">{{ expiryDateError }}</span>
            </div>

            <div class="form-group">
                <label for="cvv">CVV код</label>
                <input
                    type="text"
                    id="cvv"
                    v-model="cvv"
                    @blur="validateCVV"
                    placeholder="XXX"
                />
                <span v-if="cvvError" class="error">{{ cvvError }}</span>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    v-model="email"
                    @blur="validateEmail"
                    placeholder="example@example.com"
                />
                <span v-if="emailError" class="error">{{ emailError }}</span>
            </div>

            <div class="buy">
                <button @click="submitForm">Купить</button>
            </div>

            
    

        </div>
    </div>

</template>


<style scoped lang="scss">


.container_window {
    position: fixed;
    width: 100%;
    height: 99vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000000;


    .window {
        width: 60%;
        height: auto;
        background: white;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 10px;
        padding-bottom: 10px;


        opacity: 1;

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: 5px;
                color: #555;
            }

            input {
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;

                &:focus {
                    border-color: #007bff; 
                    outline: none; 
                }
            }

            .error {
                color: red; 
                font-size: 12px;
                margin-top: 5px;
            }
        }

        .buy {
            display: flex;
            justify-content: center;

            button {
                padding: 10px 20px;
                background-color: #007bff; 
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;

                &:hover {
                    background-color: #0056b3; 
                }
            }
        }
    }
}
</style>