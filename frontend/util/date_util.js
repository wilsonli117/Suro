import { applyMiddleware } from "redux";

export const dateParse = date => {

    const months = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "Aug",
        9: "Sept",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    }

    const year = date.split("-")[0];
    const monthNum = parseInt(date.split("-")[1]);

    return `${months[monthNum]} ${year}`
}

export const times = ['Midnight',
                    '12:30 AM',
                    '1:00 AM',
                    '1:30 AM',
                    '2:00 AM',
                    '2:30 AM',
                    '3:00 AM',
                    '3:30 AM',
                    '4:00 AM',
                    '4:30 AM',
                    '5:00 AM',
                    '5:30 AM',
                    '6:00 AM',
                    '6:30 AM',
                    '7:00 AM',
                    '7:30 AM',
                    '8:00 AM',
                    '8:30 AM',
                    '9:00 AM',
                    '9:30 AM',
                    '10:00 AM',
                    '10:30 AM',
                    '11:00 AM',
                    '11:30 AM',
                    'Noon',
                    '12:30 PM',
                    '1:00 PM',
                    '1:30 PM',
                    '2:00 PM',
                    '2:30 PM',
                    '3:00 PM',
                    '3:30 PM',
                    '4:00 PM',
                    '4:30 PM',
                    '5:00 PM',
                    '5:30 PM',
                    '6:00 PM',
                    '6:30 PM',
                    '7:00 PM',
                    '7:30 PM',
                    '8:00 PM',
                    '9:00 PM',
                    '9:30 PM',
                    '10:00 PM',
                    '10:30 PM',
                    '11:00 PM',
                    '11:30 PM']

export const parseTime = (input) => {
    if (input === 'Midnight') return [0, 0];
    if (input === 'Noon') return [12, 0];
    if (input === '12:30 AM') return [0, 30];
    if (input === '12:30 PM') return [12, 30];

    const time = input.split(' ')[0];
    let hours = parseInt(time.split(':')[0]);
    const minutes = parseInt(time.split(':')[1]);

    if (input.split(' ')[1] === 'PM') hours += 12;

    return [hours, minutes];
}

export const formatDate = (date) => {
    if (!date) return "";
    date = date.toLocaleDateString().split('/');
    let month = date[0];
    let day = date[1];
    let year = date[2];

    if (parseInt(month) < 10) month = '0' + month;
    if (parseInt(day) < 10) day = '0' + day;

    return `${month}/${day}/${year}`;
}

export const defaultTime = (date) => {
    if (!date) return "";
    let hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours === 0 && minutes === 0) return 'Midnight';
    if (hours === 12 && minutes === 0) return 'Noon';

    if (hours > 12) {
        hours = hours - 12;
        if (minutes === 0) {
            return `${hours}:0${minutes} PM`
        } else {
            return `${hours}:${minutes} PM`
        }
    } else {
        if (minutes === 0) {
            return `${hours}:0${minutes} AM`
        } else {
            return `${hours}:${minutes} AM`
        }
    }

    
}