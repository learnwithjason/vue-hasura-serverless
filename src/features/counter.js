import { reactive, toRefs, computed } from 'vue';

const state = reactive({
  currentCount: 0,
  doubleCount: computed(() => state.currentCount * 2),
});

const incrementCount = () => {
  state.currentCount += 1;
};

export default () => ({
  ...toRefs(state),
  incrementCount,
});
