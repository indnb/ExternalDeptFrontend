import axios from "axios";

export const onSubmitTeam = async (data: any, reset: any, setMessage: any) => {
    const { passwordAgain, ...filteredData } = data;
    console.log(passwordAgain);
    try {
        const response = await axios.post(
            `${process.env.API_PORT}/hackathon_2024/team/create`,
            JSON.stringify(filteredData),
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Success answer team:", response);
        reset();
        setMessage("зареєструйтесь як учасник!");
    } catch (error) {
        console.error("Error team:", error);
        setMessage("помилка при реєстрації команди");
    }
};
