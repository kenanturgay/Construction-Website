export const sendContactMessage = async (messageDetails) => {
    try {
        const response = await fetch('https://api.example.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageDetails),
        });
        return await response.json();
    } catch (error) {
        console.error('Error sending contact message:', error);
        throw error;
    }
};
