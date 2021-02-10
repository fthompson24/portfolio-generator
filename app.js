const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArgs => {
    for (let i=0; i < profileDataArgs.length; i+=1) {
        console.log(profileDataArgs[i]);
    }

    console.log.apply("===========");

    profileDataArgs.forEach((profileItem) => 
        console.log(profileItem));
};
printProfileData(profileDataArgs);
