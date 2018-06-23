const addNewFeed = 'ADD_NEW_FEED';
const initialState = { items: [
    {
      name: "general",
      glyph: "globe",
      selected: false
    },
    {
      name: "health",
      glyph: "heart",
      selected: false
    },
    {
      name: "science",
      glyph: "education",
      selected: false
    },
    {
      name: "sports",
      glyph: "king",
      selected: false
    },
    {
      name: "technology",
      glyph: "qrcode",
      selected: false
    },
    {
      name: "business",
      glyph: "briefcase",
      selected: false
    },
    {
      name: "entertainment",
      glyph: "film",
      selected: false
    }
  ] 
};

export const actionCreators = {
    addNewFeed: name => async (dispatch, getState) => {    
        try {
            const { feeds } = getState();
            const items = feeds.items;
            items.forEach((item, index) => {
                if(item.name === name) {
                    item.selected = !item.selected
                }
            });

            dispatch({ type: addNewFeed, items });
        }
        catch(error) {
            console.log(error);
        }
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === addNewFeed) {
        return {
            ...state,
            items: action.items
        };
    }

    return state;
};
