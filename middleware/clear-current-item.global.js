import { useCurrentItemStore } from '~/stores/functions/currentItem';

const DETAIL_PAGE_PATH = /^\/(?:[a-z]{2}\/)?(articles|news|projects|sales)\/[^/]+\/?$/;

export default defineNuxtRouteMiddleware((to) => {
  if (DETAIL_PAGE_PATH.test(to.path)) return;

  const currentItemStore = useCurrentItemStore();
  currentItemStore.clearCurrentItem();
});
