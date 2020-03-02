const data = {
    userFirebaseId: '',
    createdAtFBAccount: '',
    deviceName: '',
    deviceYearClass: '',
    appUserId: '',
    statistics: {
        lastSession: '',
        lastSessionTotalTime: '',
        TotalSessionTime: '',
        ScreensSessionTime: {
            HomeScreen: '', // screen adı burada olacak ve string olarak süre eklenecek + olarak
            TrashScreen: '',
            AboutScreen: '',
            EditScreen: '',
            AddScreen: '',
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
        todos:[],
        userInfo:{
            username:'',
            password: '',
            email:'',
        }
    }
}