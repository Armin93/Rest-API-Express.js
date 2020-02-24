import app from './app';
import '@babel/polyfill';

async function main(){
   await app.listen(4000);
   console.log(`App has been started on  port 4000`)
}
main();
