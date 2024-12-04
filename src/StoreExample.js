import useState2 from './store/useState2';

const StoreExample=()=>{
	const {set, get} = useState2({
		group:"BTS",
		member: 5
	})

	function increaseMember(){
		set({member: get().member +1})
	}

	return(
		<div>
			<div>그룹:{get().group}</div>
			<div>맴버:{get().member}</div>
			<button onClick={increaseMember}>맴버수증가</button>
		</div>
	)
}

export default StoreExample;