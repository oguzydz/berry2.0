export const initalState = {
    lastChecked: '', //
    userFirebaseId: '', //
    createdAtFBAccount: '', //
    lastLoginFB: '',//
    deviceName: '',//
    deviceYearClass: '',//
    appUserId: '',//
    statistics: {
        lastSession: '',
        lastSessionLoginDate: '',
        lastSessionTotalTime: 0,
        TotalSessionTime: 0,
        ScreensSessionTime: {
            HomeScreen: 0, // screen adı burada olacak ve string olarak süre eklenecek + olarak
            TrashScreen: 0,
            AboutScreen: 0,
            EditScreen: 0,
            AddScreen: 0,
        },
        ButtonsClicked: {
            Add: 0,
            Theme: 0,
            Edit: 0,
            Trash: 0,
            DeleteAll: 0,
            Recycle: 0,
            About: {
                Linkedin: 0,
                Github: 0,
                Twitter: 0,
                Instagram: 0,
                WebSite: 0,
                GetStarted: 0,
            },
            Menu: {
                Home: 0,
                About: 0,
                Trash: 0,
            },
            Dark: 0,
            Light: 0,
        },
        ThemeSessionTime: {
            light: 0,
            dark: 0,
        },
        Ads: {
            HomeBanner: 0,
            TrashBanner: 0,
            PopupAds: 0,
        },
        isSync: false,
        isAnonymous: true,
        todos: [],
        userInfo: {
            username: '',
            password: '',
            email: '',
        }
    }
}