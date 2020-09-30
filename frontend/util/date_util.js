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