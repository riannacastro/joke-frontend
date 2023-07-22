import React from 'react'

function RequestsCard(props) {

    return (
        <div key={props.id} className="flex-col bg-white w-[500px] p-4 rounded-lg justify-center">
            <p className='font-bold'>Nickname: <span>{props.username}</span></p>
            <br />
            {props.request}
        </div>
    )
}

export default RequestsCard
