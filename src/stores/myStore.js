export const useMyStore = defineStore('myStore', () => {
  const state = reactive({ message: 'Viel Erfolg!' });

  return { state };
});
