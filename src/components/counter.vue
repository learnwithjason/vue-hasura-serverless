<template>
  <h1>Counter: {{ currentCount }}</h1>
  <p>Doubled: {{ doubleCount }}</p>
  <button @click="incrementCount">increment +</button>
</template>

<script>
import { defineComponent } from "vue";
import useCounter from "../features/counter";

export default defineComponent({
  setup: () => {
    const counter = useCounter();

    return {
      ...counter
    };
  }
});
</script>
