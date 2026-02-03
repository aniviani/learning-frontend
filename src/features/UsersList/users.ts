export interface IUser {
    id: number;
    name: string;
    surname: string;
    age: number;
    email: string;
    phone: string;
    city: string;
    country: string;
    isActive: boolean;
    isVerified: boolean;
    registrationDate: string;
    lastLogin: string;
    role: string;
    subscription: string;
    hobbies: string[]; 
    languages: string[];
    skills: string[];
    education: IEducation;
    address: IAddress;
    social: ISocial;
    preferences: IRreferences;
    statistics: IStatistics;
}

interface IEducation {
    university: string;
    faculty: string;
    graduationYear: number;
}

interface IAddress {
    street: string;
    house: number;
    apartment: number;
    zipCode: string;
}

interface ISocial {
    twitter: string | null;
    github: string | null;
    linkedin: string | null;
}

interface IRreferences {
    theme: string;
    notifications: boolean;
    newsletter: boolean;
}

interface IStatistics {
    posts: number;
    followers: number;
    following: number;
    rating: number;
}

export const users: IUser[] = [
  {
    id: 1,
    name: "Анна",
    surname: "Иванова",
    age: 25,
    email: "anna.ivanova@example.com",
    phone: "+7 (912) 345-67-89",
    city: "Москва",
    country: "Россия",
    isActive: true,
    isVerified: true,
    registrationDate: "2023-01-15T10:30:00Z",
    lastLogin: "2024-01-20T14:45:00Z",
    role: "user",
    subscription: "premium",
    hobbies: ["чтение ", "йога ", "фотография ", "путешествия "],
    languages: ["русский ", "английский "],
    skills: ["JavaScript ", "UI/UX ", "Project Management "],
    education: {
      university: "МГУ",
      faculty: "Филологический",
      graduationYear: 2020
    },
    address: {
      street: "ул. Ленина",
      house: 10,
      apartment: 25,
      zipCode: "101000"
    },
    social: {
      twitter: "@anna_ivanova",
      github: "anna-ivanova",
      linkedin: "anna-ivanova"
    },
    preferences: {
      theme: "dark",
      notifications: true,
      newsletter: true
    },
    statistics: {
      posts: 45,
      followers: 1240,
      following: 560,
      rating: 4.8
    }
  },
  {
    id: 2,
    name: "Иван",
    surname: "Петров",
    age: 30,
    email: "ivan.petrov@example.com",
    phone: "+7 (923) 456-78-90",
    city: "Санкт-Петербург",
    country: "Россия",
    isActive: false,
    isVerified: true,
    registrationDate: "2022-11-20T09:15:00Z",
    lastLogin: "2024-01-10T11:20:00Z",
    role: "admin",
    subscription: "enterprise",
    hobbies: ["футбол ", "путешествия ", "горные лыжи ", "виноделие "],
    languages: ["русский ", "английский ", "немецкий "],
    skills: ["Python ", "Data Science ", "DevOps ", "Team Leadership "],
    education: {
      university: "СПбГУ",
      faculty: "Математико-механический",
      graduationYear: 2017
    },
    address: {
      street: "ул. Пушкина",
      house: 5,
      apartment: 12,
      zipCode: "190000"
    },
    social: {
      twitter: "@ivan_petrov",
      github: "ivan-petrov",
      linkedin: "ivan-petrov"
    },
    preferences: {
      theme: "light",
      notifications: false,
      newsletter: true
    },
    statistics: {
      posts: 128,
      followers: 3540,
      following: 890,
      rating: 4.9
    }
  },
  {
    id: 3,
    name: "Мария",
    surname: "Сидорова",
    age: 22,
    email: "maria.sidorova@example.com",
    phone: "+7 (917) 567-89-01",
    city: "Новосибирск",
    country: "Россия",
    isActive: true,
    isVerified: false,
    registrationDate: "2023-08-05T14:20:00Z",
    lastLogin: "2024-01-21T09:10:00Z",
    role: "user",
    subscription: "free",
    hobbies: ["рисование ", "танцы ", "кулинария ", "блогинг "],
    languages: ["русский ", "французский "],
    skills: ["Дизайн ", "Копирайтинг ", "SMM "],
    education: {
      university: "НГУ",
      faculty: "Дизайн",
      graduationYear: 2023
    },
    address: {
      street: "ул. Кирова",
      house: 23,
      apartment: 8,
      zipCode: "630000"
    },
    social: {
      twitter: "@maria_sidorova",
      github: "maria-sid",
      linkedin: "maria-sidorova"
    },
    preferences: {
      theme: "dark",
      notifications: true,
      newsletter: false
    },
    statistics: {
      posts: 23,
      followers: 560,
      following: 340,
      rating: 4.5
    }
  },
  {
    id: 4,
    name: "Алексей",
    surname: "Кузнецов",
    age: 28,
    email: "alex.kuznetsov@example.com",
    phone: "+7 (905) 678-90-12",
    city: "Екатеринбург",
    country: "Россия",
    isActive: true,
    isVerified: true,
    registrationDate: "2021-05-12T16:45:00Z",
    lastLogin: "2024-01-22T13:25:00Z",
    role: "moderator",
    subscription: "pro",
    hobbies: ["программирование ", "гитара ", "скалолазание ", "настольные игры "],
    languages: ["русский ", "английский ", "испанский "],
    skills: ["FullStack Development ", "React ", "Node.js ", "Docker "],
    education: {
      university: "УрФУ",
      faculty: "Информационные технологии",
      graduationYear: 2019
    },
    address: {
      street: "ул. Мира",
      house: 15,
      apartment: 33,
      zipCode: "620000"
    },
    social: {
      twitter: "@alex_kuznetsov",
            github: "alex-kuznetsov",
      linkedin: "alex-kuznetsov"
    },
    preferences: {
      theme: "dark",
      notifications: true,
      newsletter: true
    },
    statistics: {
      posts: 89,
      followers: 2100,
      following: 450,
      rating: 4.7
    }
  },
  {
    id: 5,
    name: "Елена",
    surname: "Смирнова",
    age: 35,
    email: "elena.smirnova@example.com",
    phone: "+7 (911) 789-01-23",
    city: "Казань",
    country: "Россия",
    isActive: true,
    isVerified: true,
    registrationDate: "2020-03-08T11:10:00Z",
    lastLogin: "2024-01-19T17:30:00Z",
    role: "user",
    subscription: "premium",
    hobbies: ["йога ", "медитация ", "психология ", "ведение дневника "],
    languages: ["русский ", "английский ", "китайский "],
    skills: ["Психология ", "Коучинг ", "Менеджмент "],
    education: {
      university: "КФУ",
      faculty: "Психология",
      graduationYear: 2012
    },
    address: {
      street: "ул. Баумана",
      house: 7,
      apartment: 19,
      zipCode: "420000"
    },
    social: {
      twitter: "@elena_smirnova",
      github: null,
      linkedin: "elena-smirnova"
    },
    preferences: {
      theme: "light",
      notifications: false,
      newsletter: true
    },
    statistics: {
      posts: 156,
      followers: 8900,
      following: 1200,
      rating: 4.9
    }
  },
  {
    id: 6,
    name: "Дмитрий",
    surname: "Васильев",
    age: 32,
    email: "dmitry.vasiliev@example.com",
    phone: "+7 (902) 890-12-34",
    city: "Сочи",
    country: "Россия",
    isActive: false,
    isVerified: false,
    registrationDate: "2023-10-30T08:50:00Z",
    lastLogin: "2023-12-15T10:20:00Z",
    role: "user",
    subscription: "free",
    hobbies: ["серфинг ", "дайвинг ", "фотография ", "рыбалка "],
    languages: ["русский ", "английский "],
    skills: ["Маркетинг ", "Аналитика ", "SEO "],
    education: {
      university: "ЮФУ",
      faculty: "Маркетинг",
      graduationYear: 2014
    },
    address: {
      street: "ул. Приморская",
      house: 42,
      apartment: 7,
      zipCode: "354000"
    },
    social: {
      twitter: "@dmitry_vas",
      github: "dmitry-vasiliev",
      linkedin: null
    },
    preferences: {
      theme: "light",
      notifications: true,
      newsletter: false
    },
    statistics: {
      posts: 12,
      followers: 230,
      following: 150,
      rating: 3.8
    }
  },
  {
    id: 7,
    name: "Ольга",
    surname: "Попова",
    age: 29,
    email: "olga.popova@example.com",
    phone: "+7 (915) 901-23-45",
    city: "Калининград",
    country: "Россия",
    isActive: true,
    isVerified: true,
    registrationDate: "2022-07-14T13:25:00Z",
    lastLogin: "2024-01-22T08:15:00Z",
    role: "user",
    subscription: "pro",
    hobbies: ["садоводство ", "выпечка ", "шитье ", "астрономия "],
    languages: ["русский ", "польский ", "английский "],
    skills: ["Дизайн интерьеров ", "Флористика ", "Event Management "],
    education: {
      university: "БФУ",
      faculty: "Дизайн",
      graduationYear: 2018
    },
    address: {
      street: "ул. Гагарина",
      house: 18,
      apartment: 41,
      zipCode: "236000"
    },
    social: {
      twitter: null,
      github: null,
      linkedin: "olga-popova"
    },
    preferences: {
      theme: "dark",
      notifications: true,
      newsletter: true
    },
    statistics: {
      posts: 67,
      followers: 1800,
      following: 670,
      rating: 4.6
    }
  },
  {
    id: 8,
    name: "Сергей",
    surname: "Соколов",
    age: 40,
    email: "sergey.sokolov@example.com",
    phone: "+7 (925) 012-34-56",
    city: "Владивосток",
    country: "Россия",
    isActive: true,
    isVerified: true,
    registrationDate: "2019-11-03T10:00:00Z",
    lastLogin: "2024-01-21T16:40:00Z",
    role: "admin",
    subscription: "enterprise",
    hobbies: ["яхтинг ", "рыбалка ", "история ", "коллекционирование "],
    languages: ["русский ", "английский ", "японский "],
    skills: ["Бизнес-анализ ", "Управление проектами ", "Финансы "],
    education: {
      university: "ДВФУ",
      faculty: "Экономика",
            graduationYear: 2007
    },
    address: {
      street: "ул. Набережная",
      house: 3,
      apartment: 22,
      zipCode: "690000"
    },
    social: {
      twitter: "@sergey_sokolov",
      github: "sergey-sokolov",
      linkedin: "sergey-sokolov"
    },
    preferences: {
      theme: "light",
      notifications: true,
      newsletter: true
    },
    statistics: {
      posts: 210,
      followers: 5600,
      following: 1200,
      rating: 4.9
    }
  },
  {
    id: 9,
    name: "Татьяна",
    surname: "Михайлова",
    age: 27,
    email: "tatiana.mikhailova@example.com",
    phone: "+7 (903) 123-45-67",
    city: "Краснодар",
    country: "Россия",
    isActive: true,
    isVerified: false,
    registrationDate: "2023-03-22T12:30:00Z",
    lastLogin: "2024-01-20T19:20:00Z",
    role: "user",
    subscription: "free",
    hobbies: ["бег ", "велоспорт ", "йога ", "чтение "],
    languages: ["русский ", "английский ", "итальянский "],
    skills: ["Фитнес-тренер ", "Нутрициология ", "Блогинг "],
    education: {
      university: "КубГУ",
      faculty: "Физическая культура",
      graduationYear: 2020
    },
    address: {
      street: "ул. Красная",
      house: 56,
      apartment: 14,
      zipCode: "350000"
    },
    social: {
      twitter: "@tanya_mikh",
      github: null,
      linkedin: "tatiana-mikhailova"
    },
    preferences: {
      theme: "dark",
      notifications: true,
      newsletter: true
    },
    statistics: {
      posts: 34,
      followers: 890,
      following: 450,
      rating: 4.3
    }
  },
  {
    id: 10,
    name: "Андрей",
    surname: "Новиков",
    age: 31,
    email: "andrey.novikov@example.com",
    phone: "+7 (916) 234-56-78",
    city: "Ростов-на-Дону",
    country: "Россия",
    isActive: false,
    isVerified: true,
    registrationDate: "2022-02-18T15:40:00Z",
    lastLogin: "2024-01-05T12:10:00Z",
    role: "moderator",
    subscription: "pro",
    hobbies: ["игра на гитаре ", "сочинение музыки ", "видеомонтаж ", "гейминг "],
    languages: ["русский ", "английский "],
    skills: ["Музыкальное производство ", "Звукорежиссура ", "Видеомонтаж "],
    education: {
      university: "РГУ",
      faculty: "Искусств",
      graduationYear: 2016
    },
    address: {
      street: "ул. Большая Садовая",
      house: 22,
      apartment: 9,
      zipCode: "344000"
    },
    social: {
      twitter: "@andrey_novikov",
      github: "andrey-novikov",
      linkedin: "andrey-novikov"
    },
    preferences: {
      theme: "dark",
      notifications: false,
      newsletter: false
    },
    statistics: {
      posts: 78,
      followers: 3200,
      following: 780,
      rating: 4.7
    }
  }
];
