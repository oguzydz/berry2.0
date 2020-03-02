
import { store } from '../store/index';
import { setDevice, authUser } from './functions';


// kullanıcı cihaz biilgilerini her 3 saatte bir yap

export const setDeviceAndUserAuth = () => {

    const isNeeded = new Date().getTime() - store.getState().analytics.lastChecked;

    if (store.getState().analytics.lastChecked === '' && isNeeded > 20000) {
        setDevice();
        authUser();
    }

}