import axios from "axios";

export const onSubmitParticipant = async (data: any, reset: any, setMessage: any) => {
    let DataUniversity;
    let DataTeam;
    let university;
    let team;

    try {
        const [universityData, teamData] = await Promise.all([
            axios.get(`${process.env.API_PORT}/hackathon_2024/university/all`),
            axios.get(`${process.env.API_PORT}/hackathon_2024/team/all`),
        ]);

        DataUniversity = universityData.data;
        DataTeam = teamData.data;

        university = DataUniversity.find((univ: any) => univ.name === data.university);
        team = DataTeam.find((team: any) => team.name === data.teamName);

        const match = data.name.match(/^(\S+)\s+(\S+)/);

        const filteredData = {
            team_data: {
                id: team.id,
                password: data.password,
            },
            user_data: {
                first_name: match[1],
                last_name: match[2],
                nickname_tg: data.nickname_tg,
                phone:data.phone,
                team_id: team.id,
                university_id: university.id,
            },
        };

        console.log(JSON.stringify(filteredData))
        const response = await axios.post(
            `${process.env.API_PORT}/hackathon_2024/user/registration_by_tg`,
            JSON.stringify(filteredData),
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Success answer participant:", response);
        reset();
        setMessage("Форма надіслана!");
    } catch (error) {
        console.error("Error participant:", error);
        setMessage("помилка при реєстрації учасника.");
    }
};

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
