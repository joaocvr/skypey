import {generateUser} from '../common/Contact';

export default function user(state = generateUser(), action){
    return state;
}