import useState2 from './store/useState2';

const State2Example=()=>{
	const {set, get} = useState2({ //객체라서 {get,set}식으로 순서 바뀌어도 된다.
		group:"BTS",
		member: 5
	})

	function increaseMember(){
		set({member: get().member +1})
	}
	function increaseMemberBy(val){
		set({member: get().member +val})
	}

	return(
		<div>
			<div>그룹:{get().group}</div>
			<div>맴버:{get().member}</div>
			<button onClick={increaseMember}>맴버수증가</button>
			<button onClick={()=>increaseMemberBy(5)}>맴버 5씩 증가</button>
		</div>
	)
}

export default State2Example;