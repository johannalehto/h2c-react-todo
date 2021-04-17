import React from 'react'

export default function Row(props) {
    return (
        <tr className="border-top">
            <td>
                {props.title}
            </td>
            <td>
                {props.description}
            </td>
        </tr>
    )
}
