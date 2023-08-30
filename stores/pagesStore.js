import { getRequest } from '~/stores/apiService';

export const pagesStore = defineStore('pages', {
  state: () => ({
    page: {
      body: {},
      error: null,
    },
  }),
  actions: {
    async fetchPage(path = '') {
      try {
        this.page = await getRequest(path);
        this.error = null;
      } catch ( error ) {
        this.page = null;
        this.error = error.message;
      }
    },
  },
});