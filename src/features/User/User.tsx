import { type FC } from "react";

interface IProps {
    name: string;
    surname: string;
    age: number;
    email: string;
    city: string;
    country: string;
}

export const User: FC<IProps> = ({
    name,
    surname,
    age,
    email,
    city,
    country,
}) => {
    return (
    <div>
        {name} {surname}, {age} лет — {email} ({city}, {country})
    </div>

    );
};
