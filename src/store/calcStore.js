import {create} from 'zustand'

// const calcStore = create( (set,get)=>({}) )

const calcStore = create((set, get)=>({
	count:0,
	setCount: (val) => set({count: val}),
	increaseCount: () => set({count: get().count +1}),
	decreaseCount: () => set({count: get().count -1}),
	multipleCount: (val) => set((state)=> ({count: state.count * val})),
	initializeCount: ()=> set({count: 0}),
	addCount: (val) => set({count: get().count + val})
}))

export default calcStore;