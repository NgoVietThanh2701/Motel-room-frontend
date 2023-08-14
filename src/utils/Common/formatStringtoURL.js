export const convertStringtoURL = (str) => {
   str = str.toLowerCase();
   /* xóa dấu */
   str = str
      .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
      .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp
   str = str.replace(/[đĐ]/g, 'd'); /* Thay ký tự đĐ */
   str = str.replace(/([^0-9a-z-\s])/g, ''); /* Xóa ký tự đặc biệt */
   str = str.replace(/(\s+)/g, '-'); // Xóa khoảng trắng thay bằng ký tự -
   str = str.replace(/-+/g, '-'); // Xóa ký tự - liên tiếp
   str = str.replace(/^-+|-+$/g, ''); // xóa phần dư - ở đầu & cuối
   return str;
}