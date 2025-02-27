// Change to function 
const minageS = 21;
const minageL = 25;
function rentCarCheck(age, hasLicense, wantsLuxury, cleanRecord){
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
}

rentCarCheck(22, true, false, true);
rentCarCheck(26, true, true, true);
rentCarCheck(20, true, false, true);
rentCarCheck(25, false, true, true);