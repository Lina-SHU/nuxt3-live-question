// 建立名稱為 useBookingStore 的 store 

// Day 19
// export const useBookingStore = defineStore('booking', () => {
//     const bookingResult = ref({});

//     const createBooking = (bookingInfo) => {
//         bookingResult.value = bookingInfo;
//     }
//     return {
//         bookingResult,
//         createBooking
//     }
// });

export const useBookingStore = defineStore('booking', () => {
    const bookingInfo = ref({});

    const setBookingInfo = (data) => {
        bookingInfo.value = data;
    }
    return {
        bookingInfo,
        setBookingInfo
    }
});
