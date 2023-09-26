<template>
  <div class="letter-search-bar">
    <!-- <div class="letter-buttons"> -->
    <button
      v-for="letter in alphabet"
      :key="letter"
      @click="setSearchLetter(letter)"
      class="letter-button"
    >
      {{ letter }}
    </button>
  </div>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";

export default {
  name: "LetterSearchComponent",
  props: {
    setSearchLetter: Function,
    
    letter: {
      type: String,
      required: true,
    },
  },
  
  data() {
    return {
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    };
  },
};
</script>

<style scoped>
.letter-search-bar {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.letter-buttons {
  display: flex;
  flex-wrap: wrap;
}

.letter-button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.letter-button:hover {
  background-color: #0056b3;
}
</style>
