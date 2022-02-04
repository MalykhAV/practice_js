function addTwoDays(date) {
    date.setDate(date.getDate() + 2);
    return date;
}
let haveDate = new Date('December 25, 1995 23:15:30');
let date = addTwoDays(haveDate);
console.log(date.toDateString());