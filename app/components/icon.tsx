export default function DrawIcon({source, className} : {source : string, className : string}) {
    return (
        <img 
            className = {className}
            src = {source}
            alt = ""
        />
    );
}