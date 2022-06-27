let item_1 = 5
console.log(item_1)

let item_2 = 3
console.log(item_2)

let item_3 = item_1 + item_2
console.log(item_3)

let item_4 = "Yolochka"
console.log(item_4)

console.log(item_3 + item_4)

console.log(item_3 * item_4) 

let item_5 = item_3

let item_6, item_6_type
item_6 = 15
item_6_type = typeof(item_6)
console.log("item_6 == ", item_6, "item_6_type == ", typeof(item_6_type))

let item_7 = String(item_6)

let item_7_type = typeof(item_7)
console.log("item_7 == ", item_7)
console.log("item_7_type == ", typeof(item_7_type))

let age_1 = 10, age_2 = 18, age_3 = 60

if (age_1 < age_2) {
    console.log("You don't have access cause of your age is " + age_1 + " It's less than " + age_2)
}

if ((age_1 >= age_2) && (age_1 < age_3 )) {
    console.log("Welcome !")
}

if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel")
}
else {
    console.log("Technical work")
}

const checkAge = function(age) {
    let age_1 = 17, age_2 = 18, age_3 = 61

    if (age < age_2) {
        console.log("You don't have access cause of your age is " + age_1 + " It's less than " + age_2)
    }   
    else if ((age >= age_2) && (age < age_3 )) {
        console.log("Welcome !")
    } 
    else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    }
    else {
        console.log("Technical work")
    }
}

checkAge(30)

const checkAge1 = function(ageNew) {
while (true) {
        try {
            if (typeof(age_1, age_2, age_3) == "number") {
                console.log("True")
                break
            }
            else {
                throw 'exception'
            }
        }
        catch(e) {
            console.log("It's not possible")
            break
        }
    }
    //вызов предыдущей функции
    checkAge(30)
}

checkAge1(50)
