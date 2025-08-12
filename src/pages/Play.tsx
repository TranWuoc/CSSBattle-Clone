import Editor from '@/components/Playlayout/Editor';

function Play() {
    return (
        <div className="h-[850px]">
            <Editor value="" onChangeHTML={() => {}} onChangeCSS={() => {}} />
        </div>
    );
}

export default Play;
