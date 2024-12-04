// 建立名稱為 useBookingStore 的 store 

export const useBookingStore = defineStore('booking', () => {
    const bookingResult = ref({});

    const createBooking = (bookingInfo) => {
        bookingResult.value = bookingInfo;
    }
    return {
        bookingResult,
        createBooking
    }
});
