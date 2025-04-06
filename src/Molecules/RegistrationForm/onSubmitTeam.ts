import axios from "axios";
import { ICreateTeam } from ".";
import { checkError } from "@/utils/checkError";
type TeamMember = {
  first_name: string;
  last_name: string;
  nickname_tg?: string;
  phone?: string;
  university_id: number;
};

type Team = {
  category: string;
  name: string;
};

type TeamData = {
  captain: TeamMember;
  members?: TeamMember[];
  team: Team;
};
export const onSubmitTeam = async (data: ICreateTeam, reset: any, setMessage: any, setStatusRegister: any, setPage: any) => {
  const members: TeamMember[] = [];

  for (let i = 1; i <= 6; i++) {
    const name = data[`member_name${i}` as keyof ICreateTeam] as string;
    const university = data[`member_university${i}` as keyof ICreateTeam];
    const phone = data[`member_phone${i}` as keyof ICreateTeam] as string;
    const nickname = data[`member_nickname_tg${i}` as keyof ICreateTeam] as string;

    if (name && university) {
      const nameMatch = name.match(/^(\S+)\s+(\S+)/);
      members.push({
        first_name: nameMatch ? nameMatch[1] : "",
        last_name: nameMatch ? nameMatch[2] : "",
        university_id: Number(university),
        phone: phone ? formatPhoneNumber(phone) : undefined,
        nickname_tg: nickname ? removeAtSymbol(nickname) : undefined
      });
    }
  }
  const captainMatch = data.captain_name.match(/^(\S+)\s+(\S+)/);
  const body: TeamData = {
    captain: {
      first_name: captainMatch ? captainMatch[1] : "",
      last_name: captainMatch ? captainMatch[2] : "",
      nickname_tg: removeAtSymbol(data.captain_nickname_tg),
      phone: formatPhoneNumber(data.captain_phone),
      university_id: Number(data.captain_university)
    },
    team: {
      category: data.category,
      name: data.team_name ? data.team_name : data.captain_name
    },
    ...(members.length ? { members } : {})
  };
  try {
    const response = await axios.post(
      `${process.env.API_PORT}/hackathon_2025/team/registration`,
      JSON.stringify(body),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response) {
      setStatusRegister(true)

    }
    reset();
    setMessage("зареєструйтесь як учасник!");
  } catch (error: any) {
    checkError(error, setMessage, setPage)


  }
};

function formatPhoneNumber(phone: string) {
  const digits = phone.replace(/\D/g, '');

  if (digits.startsWith('0')) {
    return digits;
  }

  let formatted = digits;
  if (digits.length > 10) {
    formatted = digits.slice(digits.length - 10);
  }

  if (!formatted.startsWith('0')) {
    formatted = '0' + formatted;
  }

  return formatted;
}
function removeAtSymbol(tg: string) {
  const str = tg.replace('@', '');
  return str
}
