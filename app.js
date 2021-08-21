let hrs = document.querySelectorAll(".hr");
let mns = document.querySelectorAll(".mn");

for (var i = 0; i < hrs.length; i++) {
    p = "hr-" + i;
    hrs[i].setAttribute("id", p);
}

for (var i = 0; i < mns.length; i++) {
    h = "mn-" + i;
    mns[i].setAttribute("id", h);
}

const case0 = ["225deg", "225deg"]
const case1 = ["270deg", "90deg"]
const case2 = ["0deg", "180deg"]
const case3 = ["90deg", "180deg"]
const case4 = ["270deg", "180deg"]
const case5 = ["90deg", "0deg"]
const case6 = ["270deg", "0deg"]
const case7 = ["225deg", "0deg"]
const case8 = ["0deg", "135deg"]
const case9 = ["45deg", "180deg"]
const case10 = ["315deg", "180deg"]
const case11 = ["270deg", "225deg"]

zero = [
    case3, case1, case1, case4,
    case2, case3, case4, case2,
    case2, case2, case2, case2,
    case2, case2, case2, case2,
    case2, case5, case6, case2,
    case5, case1, case1, case6
]

one = [
    case3, case1, case4, case0,
    case5, case4, case2, case0,
    case0, case2, case2, case0, 
    case0, case2, case2, case0,
    case3, case6, case5, case4,
    case5, case1, case1, case6
]

two = [
    case3, case1, case1, case4,
    case5, case1, case4, case2,
    case3, case1, case6, case2,
    case2, case3, case1, case6,
    case2, case5, case1, case4,
    case5, case1, case1, case6
]

three = [
    case3, case1, case1, case4,
    case5, case1, case4, case2,
    case3, case1, case6, case2,
    case5, case1, case4, case2,
    case3, case1, case6, case2, 
    case5, case1, case1, case6
]

four = [
    case3, case4, case3, case4,
    case2, case2, case2, case2,
    case2, case5, case6, case2,
    case5, case1, case4, case2,
    case0, case0, case2, case2,
    case0, case0, case5, case6
]

five = [
    case3, case1, case1, case4,
    case2, case3, case1, case6,
    case2, case5, case1, case4,
    case5, case1, case4, case2, 
    case3, case1, case6, case2, 
    case5, case1, case1, case6
]

six = [
    case3, case1, case1, case4,
    case2, case3, case1, case6,
    case2, case5, case1, case4,
    case2, case3, case4, case2,
    case2, case5, case6, case2,
    case5, case1, case1, case6
]

seven = [
    case3, case1, case1, case4,
    case5, case1, case11, case7,
    case0, case9, case9, case0,
    case0, case2, case2, case0,
    case0, case2, case2, case0,
    case0, case5, case6, case0
]

eight = [
    case3, case1, case1, case4,
    case2, case3, case4, case2,
    case8, case5, case6, case7, 
    case9, case3, case4, case10, 
    case2, case5, case6, case2,
    case5, case1, case1, case6
]

nine = [
    case3, case1, case1, case4,
    case2, case3, case4, case2,
    case2, case5, case6, case2, 
    case5, case1, case4, case2, 
    case3, case1, case6, case2, 
    case5, case1, case1, case6
]

dec_hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
uni_hour = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
dec_minute = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
uni_minute = [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]

function display(arr, arr2) {
    for (var i = 0; i < arr.length; i++) {
        let hour = document.getElementById("hr-" + arr2[i]);
        let minute = document.getElementById("mn-" + arr2[i]);

        hour.style.transform = `rotateZ(${arr[i][0]})`
        minute.style.transform = `rotateZ(${arr[i][1]})`
    }
}

numbers = [zero, one, two, three, four, five, six, seven, eight, nine]
inHour = [dec_hour, uni_hour]
inMinute = [dec_minute, uni_minute]

function iterateNumber(num){
    arr = []
    var temp = num % 10;

    if (num - temp == 0) {
        arr = [0, num];
        return arr;
    } else {
        var temp2 = (num - temp) / 10;
        arr = [temp2, temp];
        return arr;
    }
}

setInterval(MyFunction, 1000)

function MyFunction() {
    // const allHours = document.getElementsByClassName("hr");
    // const allMinutes = document.getElemesntsByClassName("mn");

    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    if (ss == 59) {
        for (var i = 0; i < hrs.length; i++) {
            hrs[i].classList.add("rotation")
            mns[i].classList.add("rotation")
        }
    } else {
        for (var i = 0; i < hrs.length; i++) {
            hrs[i].classList.remove("rotation")
            mns[i].classList.remove("rotation")
        }
    }

    for (var i in iterateNumber(hh)) {
        display(numbers[iterateNumber(hh)[i]], inHour[i]);
    }
    for (var i in iterateNumber(mm)) {
        display(numbers[iterateNumber(mm)[i]], inMinute[i]);
    }
}