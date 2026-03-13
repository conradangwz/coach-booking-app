import appointment_img from './appointment_img.png'
import header_img from './header_image.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import ch1 from './ch1.png'
import ch2 from './ch2.png'
import ch3 from './ch3.png'
import ch4 from './ch4.png'
import ch5 from './ch5.png'
import ch6 from './ch6.png'
import ch7 from './ch7.png'
import ch8 from './ch8.png'
import ch9 from './ch9.png'
import ch10 from './ch10.png'
import ch11 from './ch11.png'
import ch12 from './ch12.png'
import ch13 from './ch13.png'
import ch14 from './ch14.png'
import ch15 from './ch15.png'
import Youth_Table_Tennis_Coach from './youth.png'
import Elite_Performance_Coach from './elite.png'
import Defensive_Specialist_Coach from './shield.png'
import Offensive_Power_Coach from './attack.png'
import All_Round_Coach from './allround.png'
import Tactical_Strategy_Coach from './tactics.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Youth Coach',
        image: Youth_Table_Tennis_Coach
    },
    {
        speciality: 'Elite Coach',
        image: Elite_Performance_Coach
    },
    {
        speciality: 'Offensive Coach',
        image: Offensive_Power_Coach
    },
    {
        speciality: 'Defensive Coach',
        image: Defensive_Specialist_Coach
    },
    {
        speciality: 'All-Round Coach',
        image: All_Round_Coach
    },
    {
        speciality: 'Tactical Coach',
        image: Tactical_Strategy_Coach
    },
];

export const coaches = [
    {
        _id: 'ch1',
        name: 'Aisha Thompson',
        image: ch1,
        speciality: 'Youth Coach',
        degree: 'ITTF Foundation Coach',
        experience: '4 Years',
        about: 'Aisha is passionate about developing young talent in table tennis, emphasizing fundamentals, footwork, and mental toughness to build confident and skilled junior players.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch2',
        name: 'Lena Müller',
        image: ch2,
        speciality: 'Elite Coach',
        degree: 'Professional Playing Experience',
        experience: '3 Years',
        about: 'Lena brings high-level competitive insight to her coaching, focusing on advanced techniques, match strategy, and performance under pressure for aspiring professional players.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch3',
        name: 'Maria Santos',
        image: ch3,
        speciality: 'Defensive Coach',
        degree: 'Certified Coach Level 2',
        experience: '1 Years',
        about: 'Maria excels in teaching chop, block, and counter-attacking styles, helping players master control and consistency in modern table tennis.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch4',
        name: 'Jon Jameson',
        image: ch4,
        speciality: 'Offensive Coach',
        degree: 'ITTF Advanced Coach',
        experience: '2 Years',
        about: 'Jon specializes in aggressive looping and forehand dominance, training players to develop explosive attacks and fast transitions.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch5',
        name: 'James Okafor',
        image: ch5,
        speciality: 'All-Round Coach',
        degree: 'Professional Coach Certification',
        experience: '4 Years',
        about: 'James focuses on elite-level preparation, including video analysis, physical conditioning, and tactical planning for tournament success.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch6',
        name: 'Li Chien Cheng',
        image: ch6,
        speciality: 'Tactical Coach',
        degree: 'ITTF Foundation Coach',
        experience: '4 Years',
        about: 'Li helps players develop balanced games, combining spin variation, speed, and adaptability for versatile competition play.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch7',
        name: 'Elena Kim',
        image: ch7,
        speciality: 'Youth Coach',
        degree: 'Professional Experience',
        experience: '3 Years',
        about: 'Elena coaches advanced women players, focusing on precision, endurance, and strategic doubles play in high-stakes environments.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch8',
        name: 'Kwame Nkrumah',
        image: ch8,
        speciality: 'Elite Coach',
        degree: 'Certified Coach',
        experience: '4 Years',
        about: 'Kwame is dedicated to holistic player development, blending technical drills with fitness and psychological preparation for long-term growth.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch9',
        name: 'Ilya Petrova',
        image: ch9,
        speciality: 'Defensive Coach',
        degree: 'Coach Level 1',
        experience: '1 Years',
        about: 'Ilya specializes in introducing kids and teens to the sport, building fun fundamentals while fostering a love for competitive table tennis.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch10',
        name: 'Liam O\'Connor',
        image: ch10,
        speciality: 'Offensive Coach',
        degree: 'ITTF Coach Certification',
        experience: '2 Years',
        about: 'Liam trains players in rapid footwork, quick reflexes, and explosive movements to dominate fast-paced rallies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch11',
        name: 'Freya Jackson',
        image: ch11,
        speciality: 'All-Round Coach',
        degree: 'Advanced Coach',
        experience: '4 Years',
        about: 'Freya emphasizes game intelligence, serve variation, and opponent analysis to give players a strategic edge in matches.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch12',
        name: 'Ysabella Cruz',
        image: ch12,
        speciality: 'Tactical Coach',
        degree: 'Elite Certification',
        experience: '4 Years',
        about: 'Ysabella works with aspiring pros, refining technique, mental resilience, and competition mindset for international events.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch13',
        name: 'Yyveklean Cruz',
        image: ch13,
        speciality: 'Youth Coach',
        degree: 'Professional Coach',
        experience: '3 Years',
        about: 'Yyveklean focuses on power generation, spin control, and match fitness for women competing at regional and national levels.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch14',
        name: 'Jason Lee',
        image: ch14,
        speciality: 'Elite Coach',
        degree: 'Certified Coach',
        experience: '4 Years',
        about: 'Jason Lee promotes inclusive training, helping players of all levels improve consistency, confidence, and enjoyment in the sport.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ch15',
        name: 'Clara Jensen',
        image: ch15,
        speciality: 'Defensive Coach',
        degree: 'Foundation Coach',
        experience: '1 Years',
        about: 'Clara is enthusiastic about nurturing the next generation, using engaging drills to develop technique and passion for table tennis.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
];