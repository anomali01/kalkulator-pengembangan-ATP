# Menggunakan Nginx sebagai base image
FROM nginx:alpine

# Menghapus konfigurasi default Nginx
RUN rm -rf /usr/share/nginx/html/*

# Menyalin semua file aplikasi ke direktori Nginx
COPY index.html /usr/share/nginx/html/
COPY index.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Menjalankan Nginx
CMD ["nginx", "-g", "daemon off;"]