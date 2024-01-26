import { createPinia } from 'pinia';
import { useAuthStore } from './modules/auth';

const pinia = createPinia();

export const setupPinia = () => {
  pinia.use(useAuthStore);

  return pinia;
};
