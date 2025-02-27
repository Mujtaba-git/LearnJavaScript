let age = 22;
let hasLicense = true;
let wantsLuxury = true;
let cleanRecord = true;
const minageS = 21;
const minageL = 25;
 // scenario 1
age = 22;
hasLicense = true;
wantsLuxury = false;
cleanRecord = true;
if ((age >= minageS) && (hasLicense == true)){
    if (wantsLuxury == true){
        if (age >= minageL && cleanRecord ==true){
            console.log(`"You are eligible to rent a luxury car." (Age is ${age} > ${minageL}, has license, clean record, wants luxury.)`);
        }else{
            if (age < minageL){
                console.log(`"You are eligible to rent a standard car. because your age is ${age} < ${minageL}"`);
            }
            else if(cleanRecord ==false){
                console.log(`"You are eligible to rent a standard car but not luxury car because the record"`)
            }
        }
    }else{
        console.log(`"You are eligible to rent a standard car." (Age is ${age} >= ${minageS},has license, doesn’t want luxury.)`);
    }
}else{
    if (age < minageS){
        console.log(`"Sorry, you are not eligible to rent a car." (Age is ${age} < ${minageS}, too young)`);
    }else if (hasLicense == false){
        console.log(`"Sorry, you are not eligible to rent a car." (No license, so not eligible.)`);
    }
}
// scenario 2:
age = 26;
hasLicense = true;
wantsLuxury = true;
cleanRecord = true;
if ((age >= minageS) && (hasLicense == true)){
    if (wantsLuxury == true){
        if (age >= minageL && cleanRecord ==true){
            console.log(`"You are eligible to rent a luxury car." (Age is ${age} > ${minageL}, has license, clean record, wants luxury.)`);
        }else{
            if (age < minageL){
                console.log(`"You are eligible to rent a standard car. because your age is ${age} < ${minageL}"`);
            }
            else if(cleanRecord ==false){
                console.log(`"You are eligible to rent a standard car but not luxury car because the record"`)
            }
        }
    }else{
        console.log(`"You are eligible to rent a standard car." (Age is ${age} >= ${minageS},has license, doesn’t want luxury.)`);
    }
}else{
    if (age < minageS){
        console.log(`"Sorry, you are not eligible to rent a car." (Age is ${age} < ${minageS}, too young)`);
    }else if (hasLicense == false){
        console.log(`"Sorry, you are not eligible to rent a car." (No license, so not eligible.)`);
    }
}
// scenario 3
age = 20;
hasLicense = true;
wantsLuxury = false;
cleanRecord = true;
if ((age >= minageS) && (hasLicense == true)){
    if (wantsLuxury == true){
        if (age >= minageL && cleanRecord ==true){
            console.log(`"You are eligible to rent a luxury car." (Age is ${age} > ${minageL}, has license, clean record, wants luxury.)`);
        }else{
            if (age < minageL){
                console.log(`"You are eligible to rent a standard car. because your age is ${age} < ${minageL}"`);
            }
            else if(cleanRecord ==false){
                console.log(`"You are eligible to rent a standard car but not luxury car because the record"`)
            }
        }
    }else{
        console.log(`"You are eligible to rent a standard car." (Age is ${age} >= ${minageS},has license, doesn’t want luxury.)`);
    }
}else{
    if (age < minageS){
        console.log(`"Sorry, you are not eligible to rent a car." (Age is ${age} < ${minageS}, too young)`);
    }else if (hasLicense == false){
        console.log(`"Sorry, you are not eligible to rent a car." (No license, so not eligible.)`);
    }
}
// scenario 4
age = 25;
hasLicense = false;
wantsLuxury = true;
cleanRecord = true;
if ((age >= minageS) && (hasLicense == true)){
    if (wantsLuxury == true){
        if (age >= minageL && cleanRecord ==true){
            console.log(`"You are eligible to rent a luxury car." (Age is ${age} > ${minageL}, has license, clean record, wants luxury.)`);
        }else{
            if (age < minageL){
                console.log(`"You are eligible to rent a standard car. because your age is ${age} < ${minageL}"`);
            }
            else if(cleanRecord ==false){
                console.log(`"You are eligible to rent a standard car but not luxury car because the record"`)
            }
        }
    }else{
        console.log(`"You are eligible to rent a standard car." (Age is ${age} >= ${minageS},has license, doesn’t want luxury.)`);
    }
}else{
    if (age < minageS){
        console.log(`"Sorry, you are not eligible to rent a car." (Age is ${age} < ${minageS}, too young)`);
    }else if (hasLicense == false){
        console.log(`"Sorry, you are not eligible to rent a car." (No license, so not eligible.)`);
    }
}
// scenario 5
age = 30;
hasLicense = true;
wantsLuxury = true;
cleanRecord = false;
if ((age >= minageS) && (hasLicense == true)){
    if (wantsLuxury == true){
        if (age >= minageL && cleanRecord ==true){
            console.log(`"You are eligible to rent a luxury car." (Age is ${age} > ${minageL}, has license, clean record, wants luxury.)`);
        }else{
            if (age < minageL){
                console.log(`"You are eligible to rent a standard car. because your age is ${age} < ${minageL}"`);
            }
            else if(cleanRecord ==false){
                console.log(`"You are eligible to rent a standard car but not luxury car because the record"`)
            }
        }
    }else{
        console.log(`"You are eligible to rent a standard car." (Age is ${age} >= ${minageS},has license, doesn’t want luxury.)`);
    }
}else{
    if (age < minageS){
        console.log(`"Sorry, you are not eligible to rent a car." (Age is ${age} < ${minageS}, too young)`);
    }else if (hasLicense == false){
        console.log(`"Sorry, you are not eligible to rent a car." (No license, so not eligible.)`);
    }
}
// scenario 6
age = 22;
hasLicense = true;
wantsLuxury = true;
cleanRecord = true;
if ((age >= minageS) && (hasLicense == true)){
    if (wantsLuxury == true){
        if (age >= minageL && cleanRecord ==true){
            console.log(`"You are eligible to rent a luxury car." (Age is ${age} > ${minageL}, has license, clean record, wants luxury.)`);
        }else{
            if (age < minageL){
                console.log(`"You are eligible to rent a standard car. because your age is ${age} < ${minageL}"`);
            }
            else if(cleanRecord ==false){
                console.log(`"You are eligible to rent a standard car but not luxury car because the record"`)
            }
        }
    }else{
        console.log(`"You are eligible to rent a standard car." (Age is ${age} >= ${minageS},has license, doesn’t want luxury.)`);
    }
}else{
    if (age < minageS){
        console.log(`"Sorry, you are not eligible to rent a car." (Age is ${age} < ${minageS}, too young)`);
    }else if (hasLicense == false){
        console.log(`"Sorry, you are not eligible to rent a car." (No license, so not eligible.)`);
    }
}