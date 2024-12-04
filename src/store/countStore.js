import {create} from 'zustand'



const countStore = create((set,get)=>({
	count:0,
	메시지:"초기화되어 있음",
	increaseCount:()=>set({count: get().count +1, 메시지:"초기화 깨짐"}),
	decreaseCount:()=>set({
		count: get().count --,
		메시지:"나두 초기화안됨"
	}),
	
	
	addCount: (val) => set({count: get().count + val, 메시지: "초기화 안됨"}),
	initializeCount: ()=> set({
								count: 0,
							    메시지: "초기화!"
							}),
	multipleCount: (val) => set({count: get().count * val}),
	
}))

export default countStore;