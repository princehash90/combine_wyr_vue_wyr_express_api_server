<script setup>
import WouldYouRather from './components/WouldYouRather.vue'

import wyrServices from "./services/wyrServices.js";

import {ref, onMounted} from 'vue'

//we will use the data from wyrservices
const wyrQuestion = ref('')
const wyrAnswer1= ref('')// reactive data
const wyrAnswer2= ref('')

//const userSelection = ref('')

onMounted(() =>{
  wyrServices.getRandomWyr().then((wyrData) => {
    //expect data to be something like
    //{"question":"Be able to fly or be able to breathe underwater?","answer1":"Fly","answer2":"Breath underwater"}

    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

const userSelection =ref('')/// this will save the user's answer so we set to empty for now

function updateUserSelection(userChoice){
  userSelection.value = `Thanks! you chose ${userChoice}`// updating here whatever the user has made a choice.
}
</script>

<template>
  <div id="app-component">
      <h1>Hello! Would You Rather?</h1>
      <WouldYouRather v-bind:question="wyrQuestion"
                      v-bind:answer1="wyrAnswer1"
                      v-bind:answer2="wyrAnswer2"
                      v-on:answer-selected="updateUserSelection"
      ></WouldYouRather>

      <p>{{userSelection}}</p>

  </div>

</template>

<style scoped>
p{
  font-family: "cursive";
}
#app-component{
  background-color: coral;
  padding: 40px;
}

</style>
