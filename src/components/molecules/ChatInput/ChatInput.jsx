export const ChatInput = () => {
    return (
        <div
            className="px-5 w-full"
        >
           <Editor
                placeholder='Type a message...'
                onSubmit={handleSubmit}
                onCancel={() => {}}
                disabled={false}
                defaultValue=""
           />
        </div>
    )
}