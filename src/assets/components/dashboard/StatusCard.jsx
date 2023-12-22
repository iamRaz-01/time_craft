import '../../css/dashboard/taskstatus.css'
function StatusCard(props) {
    return (<div className='status-card'>
        <span class="material-symbols-outlined">
            {props.icon}</span>

    </div>)

}
export {
    StatusCard
}