

const fetchCourses = async () => {
    try {
        const response = await fetch("/public/data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export default fetchCourses;