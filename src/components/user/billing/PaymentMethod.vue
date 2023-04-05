<template>
    <div class="pane">
            <h2 class="pane__title text-brand">Payment Method</h2>
           
            <div class="payment-method">
                <div class="payment-row">
                    <div class="payment-col">
                        <div class="payment-tabs">
                            <div class="payment-tab">
                                <input type="radio" id="rd1" name="rd" checked>
                                <label class="payment-tab-label" for="rd1"><span class="flex items-center gap-2">Credit card <img src="/img/icons/icon-cards.svg" alt="icon"></span> </label>
                                <div class="payment-tab-content">
                                <ul class="flex items-center flex-row-reverse justify-end w-full text-left relative h-44">
                                    <li class="cards card-2"><img src="/img/icons/card-02.svg" class="w-auto h-44 " alt=""></li>
                                    <li class=" cards card-1"><img src="/img/icons/card-01.svg" class="w-auto h-44" alt=""></li>
                                </ul>
                                <button type="button" class="delete_card"> Delete card </button>

                                </div>
                            </div>
                            <div class="payment-tab">
                                <input type="radio" id="rd2" name="rd">
                                <label class="payment-tab-label" for="rd2"><span class="flex items-center gap-2"> <img src="/img/icons/icon-paypal.svg" alt="icon"></span></label>
                                <div class="payment-tab-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script lang="ts">

import Vue from 'vue';

export default Vue.extend({	


});
</script>
<style>


/* .payment-tab-content ul li {
    display: inline-flex;
} */
.payment-tab-content .delete_card {
    position: relative;
    padding: 15px 0 0;
    color: #E99648;
    text-decoration: underline;
}
.payment-row {
  display: flex;
}
.payment-row .payment-col {
  flex: 1;
}
.payment-row .payment-ol:last-child {
  margin-left: 1em;
}

/* Accordion styles */
.payment-tab input[type=radio]{
    display: none;
}
.payment-tab {
  width: 100%;
  color: white;
  overflow: hidden;
  margin-bottom: 24px;
}
.payment-tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #fff;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #fff;
  transition: 300ms;
  border-radius: 5px;
  margin-bottom: 0;
  /* Icon */
}
.payment-tab-label:hover {
    border: 1px solid #E99648;
}
.payment-tab-label::after {
  content: "❯";
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
}
.payment-tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  transition: all 0.35s;
}
.payment-tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  font-size: 0.75em;
  background: #2c3e50;
  cursor: pointer;
}
.payment-tab-close:hover {
  background: #1a252f;
}

.payment-method input:checked + .payment-tab-label {
    background: #fff;
    border: 1px solid #E99648;
}
.payment-method input:checked + .payment-tab-label::after {
  transform: rotate(90deg);
}
.payment-method input:checked ~ .payment-tab-content {
  max-height: 100vh;
  padding: 1em;
}

.payment-tab-label::before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 20px;
    left: 18px;
    background: #fff;
    border-radius: 50%;
    border: 3px solid transparent;
    box-shadow: 0 0 0px 2px #000;
}

.payment-tab-label {
    position: relative;
    padding-left: 40px;
    font-size: 16px;
    color: #000;
}

.payment-method input:checked + .payment-tab-label::before {
    background: #000;
    border-color: #fff;
}
.card-2 {
    left: 22%;
}

.cards {
    position: absolute;
}

.payment-tab-content .pane__edit {
    position: relative;
    left: auto;
    right: 0;
    line-height: inherit;
    padding: 15px 0 0;
    display: block;
    top: auto;
}
</style>