import '../../css/dashboard/Taskbutton.css'

function Taskbutton(props) {
    return (<button >
        <p className='icon'>
            <span class="material-symbols-outlined">
                {props.icon}</span>

        </p>


        <p>{props.text}</p>


    </button>)
}
export { Taskbutton }