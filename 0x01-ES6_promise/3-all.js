import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([upR, userR]) => { console.log(upR.body, userR.firstName, userR.lastName); })
    .catch(() => { console.error('Signup system offline'); });
}
