// Fungsi untuk mengubah format tanggal menggunakan Intl.DateTimeFormat
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    // Membuat instance Intl.DateTimeFormat untuk format dd-mm-yyyy
    const formatter = new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    return formatter.format(date).replace(/\//g, '-');
};
