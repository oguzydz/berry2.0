import * as actions from '../actions/actionTypes'

const initalState = [{
    title: "Okula git",
    text: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
    createdAt: 1583944283442,
    editedAt: 1583944310362,
    words: 20,
    characters: 120,
    readTime: 2,
    lastEditingDevice: "OĞUZ IPHONE'U",
    isPinned: true,
    isAlarmed: true,
    isTrashed: false,
    isHadTodoList: false,
    isCompletedTodoList: 0,
    id: 1
}, {
    title: "Yemek yeasdasdasdasdasdasdasd",
    text: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
    createdAt: 1583944283400,
    editedAt: 1500000000000,
    words: 10,
    characters: 120,
    readTime: 2,
    lastEditingDevice: "OĞUZ IPHONE'U",
    isPinned: false,
    isAlarmed: true,
    isTrashed: false,
    isHadTodoList: true,
    isCompletedTodoList: 75,
    id: 2
}, {
    title: "Yemek yeasdasdasdasdasdasdasd",
    text: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
    createdAt: 1583944283400,
    editedAt: 1500000000000,
    words: 10,
    characters: 120,
    readTime: 2,
    lastEditingDevice: "OĞUZ IPHONE'U",
    isPinned: false,
    isAlarmed: true,
    isTrashed: true,
    isHadTodoList: true,
    isCompletedTodoList: 75,
    id: 3
}, {
    title: "Yemek yeasdasdasdasdasdasdasd",
    text: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
    createdAt: 1583944283400,
    editedAt: 1500000000000,
    words: 10,
    characters: 120,
    readTime: 2,
    lastEditingDevice: "OĞUZ IPHONE'U",
    isPinned: false,
    isAlarmed: true,
    isTrashed: false,
    isHadTodoList: true,
    isCompletedTodoList: 75,
    id: 4
}, {
    title: "Yemek yeasdasdasdasdasdasdasd",
    text: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
    createdAt: 1583944283400,
    editedAt: 1500000000000,
    words: 10,
    characters: 120,
    readTime: 2,
    lastEditingDevice: "OĞUZ IPHONE'U",
    isPinned: false,
    isAlarmed: true,
    isTrashed: true,
    isHadTodoList: true,
    isCompletedTodoList: 75,
    id: 5
}]



const todosReducers = (state = initalState, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case action.INIT_TODOS:
            return {
                todos: state.todos
            }
    }
    return state;
}

export default todosReducers;