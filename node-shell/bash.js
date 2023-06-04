//Output a prompt

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const  date = require('./date');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === 'pwd') {
    pwd(done);}
   else if (cmd === 'ls') {
      ls(done);}
   else if (cmd.startsWith('cat ')) {
        const fileName = cmd.slice(4);
        cat(fileName, done);  }
   else if (cmd === 'date') {
          date(done);  }
else {
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
}
});
 