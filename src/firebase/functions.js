// Firebase import ediliyor.
import { auth, app, db } from './index';

// Redux Bilgileri
import { store } from '../store/index';
import * as actions from '../store/actions/analyticsActions';

// Kullanıcı Cihaz Bilgileri
import Constants from 'expo-constants';



auth.onAuthStateChanged((user) => {
    if (user === null) {
        try {
            auth.signInAnonymously();
            // return auth.currentUser;

        } catch (error) {
            console.log('Kullanıcı Girişi Hatası' + error);
        }
    }
})


const userAuth = {
    userFirebaseId: auth.uid,
    lastLoginFB: auth.lastLoginAt,
    isAnonymous: auth.isAnonymous,
    appUserId: Constants.installationId,
    createdAtFBAccount: auth.createdAt,
    lastChecked: new Date().getTime()
}

// Kullanıcı Auth Kurulumu 
export const authUser = () => {
    store.dispatch(actions.auth_user(userAuth))
}


const device = {
    deviceName: Constants.deviceName,
    deviceYearClass: Constants.deviceYearClass,
}

export const setDevice = () => {
    //önce redux'ta persist et sonra kullanıcı çıkarken firebase'e gönder!
    store.dispatch(actions.set_device(device))
}


export const screenClicked = (screen) => {
    // Kullanıcının sayfa butonlarına bastığı zaman bu fonksiyon çalışacak.
    store.dispatch(actions.screen_clicked(screen));
}

 


// hangi ekranda kaç saniye duruyor 



// toplamda kaç saniye durdu +


// son oturumda kaç saniye durdu +


//reklamlara tıklıyor mu


// en son ne zaman girdi





// kaç kez tema butonuna bastı

// kaç kez menü butonuna bastı


//kaç kez ekleme butonuna bastı


// kaç kez get started'a bastı

// kaç kez hepsini sildi