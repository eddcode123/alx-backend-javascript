import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto, createUser]).then((result) => { console.log(result.FirstNmae, result.lastName); }).catch(() => { console.error('Signup system offline'); });
}
