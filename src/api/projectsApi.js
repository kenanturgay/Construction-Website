export const fetchProjects = async () => {
    try {
        const response = await fetch('https://api.example.com/projects');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};
