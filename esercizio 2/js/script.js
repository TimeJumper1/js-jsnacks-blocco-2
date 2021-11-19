const names = ['mario' , 'filippo' , 'giovanna' , 'claudia'];


const surname = ['bianchi' , 'rossi' , 'filibusti' , 'romanzi'];

const invite = [];

for (i = 0; i < names.length; i++) {
    const randomName = names[Math.floor(Math.random() * ((names.length - 1) + 1 )) + 0];
    
    
    const randomSurname = surname[Math.floor(Math.random() * ((names.length -1 )+ 1)) + 0];
    
    randomComplete = randomName + ' ' + randomSurname
    invite.push(randomComplete);
}
console.log(invite)