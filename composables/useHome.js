export const useHome = () => {
  const isLoading = ref(false);
  const newsList = ref([]);

  const apiUrl = 'https://nuxr3.zeabur.app/api/v1/home/news/';
  const getNewsList = async () => {
      try {
          isLoading.value = true;
          const res = await fetch(apiUrl);

          if (!res.ok) {
            alert(res.status);
            return
          }

          const { result } = await res.json();
          newsList.value = result;
          
      } catch (error) {
          alert(error.message);
      } finally {
          isLoading.value = false;
      }
  };
  return {
    newsList,
    getNewsList,
    isLoading
  }
}
