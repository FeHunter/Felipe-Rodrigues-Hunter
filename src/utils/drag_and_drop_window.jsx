export function DragAndDropWindow ({content}){



    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        border: '1px solid red'
    }

    return (
        <div style={style}>{content}</div>
    )
}