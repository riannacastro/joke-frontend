import React from 'react'

function RequestsCard(props) {
    return (
        <div key={props.id} className="joke-card">
            Nickname: {props.username}
            <br />
            {props.request}
        </div>
    )
}
export default RequestsCard
