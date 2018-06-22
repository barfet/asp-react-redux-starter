const requestTopHeadlinesType = 'REQUEST_TOP_HEADLINES';
const receiveTopHeadlinesType = 'RECEIVE_TOP_HEADLINES';
const initialState = { articles: [], isLoading: false };

export const actionCreators = {
    requestTopHeadlines: (newsCategory, q = "") => async (dispatch, getState) => {    
        try {
            dispatch({ type: requestTopHeadlinesType, newsCategory });

            const url = `api/GoogleNews/TopHeadlines?country=us&category=${newsCategory}&q=${q}`;
            
            const response = await fetch(url);
            const articles = await response.json();

            dispatch({ type: receiveTopHeadlinesType, newsCategory, articles });
        }
        catch(error) {
            console.log(error);
        }
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestTopHeadlinesType) {
        return {
            ...state,
            newsCategory: action.newsCategory,
            isLoading: true
        };
    }

    if (action.type === receiveTopHeadlinesType) {
        return {
            ...state,
            newsCategory: action.newsCategory,
            articles: action.articles,
            isLoading: false
        };
    }

    return state;
};
