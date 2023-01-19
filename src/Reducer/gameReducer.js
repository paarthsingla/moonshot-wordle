const initialState = {
    dailyWord:['A','D','O','P','T'],
    turns:[[],[],[],[],[],[]],
    alpha:'',
    alphaCat1:[],
    alphaCat2:[],
    alphaCat3:[],
    finalWord:'N',
    mode: 'light',
    score: [0,0]
};

const actions = {
    setAlpha:"setAlpha",
    setTurns:"setTurns",
    setAlphaCat1:"setAlphaCat1",
    setAlphaCat2:"setAlphaCat2",
    setAlphaCat3:"setAlphaCat3",
    setFinalWord:"setFinalWord",
    setLocalState:"setLocalState",
    setMode:"setMode",
    setScore:"setScore"
};

export const setAlphaActionCreator = (payload) => {
    return { type: actions.setAlpha, payload }
};

export const setTurnsActionCreator = (payload) => {
    return { type: actions.setTurns, payload }
};

export const setCategory1ActionCreator = (payload) => {
    return { type: actions.setAlphaCat1, payload };
};

export const setCategory2ActionCreator = (payload) => {
    return { type: actions.setAlphaCat2, payload };
};

export const setCategory3ActionCreator = (payload) => {
    return { type: actions.setAlphaCat3, payload };
};

export const setFinalWordActionCreator = (payload) => {
    return { type: actions.setFinalWord, payload };
};

export const setLocalStateActionCreator = (payload) => {
    return { type: actions.setLocalState, payload };
};

export const setModeActionCreator = (payload) => {
    return { type: actions.setMode, payload };
};

export const setScoreActionCreator = (payload) => {
    return { type: actions.setScore, payload };
};

export const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.setAlpha:
            return {...state, alpha: action.payload};
        case actions.setTurns:
            return {...state, turns: action.payload};
        case actions.setAlphaCat1:
            return {...state, alphaCat1: action.payload};
        case actions.setAlphaCat2:
            return {...state, alphaCat2: action.payload};
        case actions.setAlphaCat3:
            return {...state, alphaCat3: action.payload};
        case actions.setFinalWord:
            return {...state, finalWord: action.payload};
        case actions.setLocalState:
            return action.payload;
        case actions.setMode:
            return {...state, mode: action.payload};
        case actions.setScore:
            return {...state, score: action.payload};
        default:
            return state;
    }
};