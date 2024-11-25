import {create} from 'zustand'

// const calcStore = create( (set,get)=>({}) )

const calcStore = create((set, get)=>({
	count:0,
	메시지: "초기화 상태",
	setCount: (val) => set({count: val}),
	increaseCount: () => set({ count: get().count +1,  메시지: "초기화 안됨"}),
	decreaseCount: () => set({ 
								count: get().count -1,
								메시지: "초기화 안됨"
							}),
	multipleCount: (val) => set((state)=> ({count: state.count * val})),
	addCount: (val) => set({count: get().count + val, 메시지: "초기화 안됨"}),
	initializeCount: ()=> set({
								count: 0,
							    메시지: "초기화!"
							}),
	
}))

export default calcStore;