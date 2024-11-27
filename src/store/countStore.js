import {create} from 'zustand'



const countStore = create((set,get)=>({
	count:0,
	메시지: "초기화 상태",
	setCount: (val) => set({count: val}),
	increaseCount:()=> set({count: get().count +1, 메시지:"변화됨" }),
	decreaseCount:()=> set({
		count: get().count --,
		메시지:"나두 변화"
	}),
	
	
	addCount: (val) => set({count: get().count + val, 메시지: "초기화 안됨"}),
	initializeCount: ()=> set({
								count: 0,
							    메시지: "초기화!"
							}),
	multipleCount: (val) => set({count: get().count * val}),
	
}))

export default countStore;