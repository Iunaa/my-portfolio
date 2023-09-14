export default function SocialMedia (props) {
    return (
        <>
            <a href={props.href}>
                <img src={`${props.src}`} />
            </a>
        </>
    );
    
}