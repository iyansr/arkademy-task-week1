const alphabet = ['q', 'w', 'z', 'x', 'e', 'r'];
const command = [true, false, false, true, false, true];

const printerMachine = (alpha, cmd) => {
  let ar = [];
  if (alpha.length !== cmd.length) {
    console.log(
      'Alphabet array lengt should equals to Command array length 😉 '
    );
  } else {
    for (let i = 0; i < alpha.length; i++) {
      if (cmd[i] === true) {
        ar.push(alpha[i]);
      }
    }
    console.log(ar);
  }
};

printerMachine(alphabet, command);
