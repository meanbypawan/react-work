import { createSlice } from "@reduxjs/toolkit";

const masterSlice  = createSlice({
    name: 'master',
    initialState:{
        data: "IndfoBeans Foudation",
        categoryList:[{
            id: 1,
            categoryName: 'Electronics'
        },{
            id: 2,
            categoryName: 'Shoes'
        },
        {
            id: 3,
            categoryName: 'Garments'
        }]
    },
    reducers:{
    }
});

export default masterSlice.reducer;