const initalState = {
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
        lastSessionTotalTime: '',
        TotalSessionTime: '',
        ScreensSessionTime: {
            HomeScreen: 0, // screen adı burada olacak ve string olarak süre eklenecek + olarak
            TrashScreen: 0,
            AboutScreen: 0,
            EditScreen: 0,
            AddScreen: 0,
        },
        ButtonsClicked: {
            Add: '',
            Theme: '',
            Edit: '',
            Trash: '',
            DeleteAll: '',
            Recycle: '',
            About: {
                Linkedin: '',
                Github: '',
                Twitter: '',
                Instagram: '',
                WebSite: '',
                GetStarted: '',

            },
            Menu: {
                Home: 0,
                About: 0,
                Trash: 0,
            },
            Dark: '',
            Light: '',
        },
        ThemeSessionTime: {
            light: '',
            dark: '',
        },
        Ads: {
            HomeBanner: '',
            TrashBanner: '',
            PopupAds: '',
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