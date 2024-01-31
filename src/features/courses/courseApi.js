

const fetchCourses = async () => {
    try {
        const response = await fetch("/public/data.json");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export default fetchCourses;